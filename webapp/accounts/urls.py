from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect
from .views import home_view, seconda_view

urlpatterns = [
    path('index/', views.index, name='index'),
    path('register/', views.register, name='register'),
    path('enter/', views.user_login, name='enter'),
    path('home/', home_view, name='home'),
    path('seconda/', seconda_view, name='seconda'),
    path('messaggi/', views.chat_view, name='messaggi'),
    path('confirm_email/', views.confirm_email, name='confirm_email'),
    path('profile/', views.profile_view, name='profile'),
    path('edit_profile/', views.edit_profile, name='edit_profile'),
    path('impostazioni/', views.impostazioni, name='impostazioni'),
    path('delete-account/', views.delete_account_view, name='delete-account'),
    path('logout/', views.user_logout, name='logout'),
    path('prova/', views.prova, name='prova'),
]
