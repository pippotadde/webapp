from django.db import models
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render, redirect
from .forms import CustomUserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth import logout
from django.http import HttpResponse
from django.utils import timezone
from datetime import datetime
from accounts.models import Profile
from django.core.mail import send_mail
import random
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect

# Vista per il logout
def user_logout(request):
    logout(request)
    return redirect('/')  # Torna alla homepage

def prova(request):
    return render(request, 'prova.html')

# Vista per eliminare l'account
@login_required
def delete_account_view(request):
    user = request.user
    user.delete()
    return redirect('/')  # Torna alla homepage dopo l'eliminazione

def index(request):
    return render(request, 'index.html')

from django.shortcuts import render

def home_view(request):
    return render(request, 'home.html')

def seconda_view(request):
    return render(request, 'seconda.html')

def profilo(request):
    return render(request, 'profilo.html')

def impostazioni(request):
    return render(request, 'impostazioni.html')

MESSAGES = [
    ]

def enter(request):
    return render(request, 'enter.html')

def user_login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            messages.error(request, "Email o password non validi.")
            return render(request, 'enter.html')

        # Autentica l'utente con username associato all'email
        user = authenticate(request, username=user.username, password=password)
        if user is not None:
            login(request, user)
            return redirect('homepage')
        else:
            messages.error(request, "Email o password non validi.")

    return render(request, 'enter.html')

def user_logout(request):
    logout(request)
    return redirect('enter.html')

def profile_view(request):
    try:
        profile = Profile.objects.get(user=request.user)
    except ObjectDoesNotExist:
        # Crea un profilo per l'utente se non esiste
        profile = Profile.objects.create(user=request.user)
        profile.save()
    return render(request, 'profile.html', {'profile': profile})

def edit_profile(request):
    if request.method == 'POST':
        profile = Profile.objects.get(user=request.user)
        action = request.POST.get('action')

        if action == 'save_picture':
            # Aggiorna SOLO l'immagine
            profile_picture = request.FILES.get('profile_picture')
            if profile_picture:
                profile.profile_picture = profile_picture
            profile.save()
            return redirect('profile')

        elif action == 'save_description_username':
            # 1) Aggiorna la descrizione (fino a 200 caratteri)
            description = request.POST.get('description', '')
            description = description[:200]  # tronca a 200, per sicurezza
            profile.description = description

            # 2) Proviamo a cambiare username
            new_username = request.POST.get('username', '').strip()
            old_username = profile.user.username

            if new_username != old_username:
                # Verifica se è già preso da un altro utente
                if User.objects.filter(username=new_username).exclude(pk=profile.user.pk).exists():
                    messages.error(request, "Username già in uso!")
                    return redirect('profile')
                else:
                    # Salva il nuovo username
                    profile.user.username = new_username
                    profile.user.save()

            # Infine salviamo il profilo
            profile.save()
            return redirect('profile')

        # Se per qualche motivo 'action' non è riconosciuta, o manca, reindirizza:
        return redirect('profile')

    # Se non è POST, reindirizziamo o mostriamo la pagina
    return redirect('profile')

def chat_view(request):
    if request.method == 'POST':
        # Ottieni il messaggio dal form
        message_content = request.POST.get('message')
        MESSAGES.append({
            "sender": request.user.username,
            "content": message_content,
            "timestamp": timezone.now(),
        })
        return redirect('messaggi')  # Ricarica la pagina per mostrare il nuovo messaggio

    return render(request, 'messaggi.html', {'messages': MESSAGES})

def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        first_name = request.POST.get('firstName')
        last_name = request.POST.get('lastName')
        email = request.POST.get('email')
        phone = request.POST.get('phoneNumber')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirmPassword')
        gender = request.POST.get('gender')
        birthdate = request.POST.get('birthdate')

        if password != confirm_password:
            messages.error(request, "Le password non coincidono.")
            return render(request, 'register.html')
        
        if User.objects.filter(username=username).exists():
            messages.error(request, "Il nome utente è già stato usato.")
            return render(request, 'register.html')

        if User.objects.filter(username=email).exists():
            messages.error(request, "Un account con questa email esiste già.")
            return render(request, 'register.html')
        
        try:
            birthdate_converted = datetime.strptime(birthdate, '%d/%m/%Y').strftime('%Y-%m-%d')
        except ValueError:
            messages.error(request, "Formato della data di nascita non valido.")
            return render(request, 'register.html')

        # Creare l'utente
        user = User.objects.create_user(
            username=username,
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name
        )
        user.save()

        # Generare un codice di conferma
        confirmation_code = str(random.randint(100000, 999999))

        # Creare il profilo associato
        profile = Profile.objects.create(
            user=user,
            phone=phone,
            gender=gender,
            birthdate=birthdate,
            confirmation_code=confirmation_code
        )
        profile.save()

        # Inviare l'email con il codice di conferma
        send_mail(
            'Conferma il tuo account',
            f'Il tuo codice di conferma è: {confirmation_code}',
            'tadde.fili@gmail.com',  # Cambia con il tuo indirizzo email
            [email],
            fail_silently=False,
        )

        messages.success(request, "Registrazione completata! Controlla la tua email per il codice di conferma.")
        return redirect('confirm_email')  # Reindirizza alla pagina di conferma

    return render(request, 'register.html')

def confirm_email(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        code = request.POST.get('code')

        try:
            profile = Profile.objects.get(user__mail=email)
            if profile.confirmation_code == code:
                profile.is_verified = True
                profile.confirmation_code = None  # Rimuove il codice di conferma
                profile.save()
                messages.success(request, "Email confermata con successo! Puoi ora effettuare il login.")
                return redirect('enter')  # Reindirizza alla pagina di login
            else:
                messages.error(request, "Codice di conferma non valido.")
        except Profile.DoesNotExist:
            messages.error(request, "Email non trovata.")

    return render(request, 'confirm_email.html')