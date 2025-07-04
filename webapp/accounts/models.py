from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15, blank=True)
    gender = models.CharField(
        max_length=10,
        choices=[('male', 'Maschio'), ('female', 'Femmina'), ('other', 'Altro')],
        blank=True
    )
    birthdate = models.DateField(null=True, blank=True)
    is_verified = models.BooleanField(default=False)  # Indica se l'email è verificata
    confirmation_code = models.CharField(max_length=6, blank=True, null=True)  # Codice di verifica
    description = models.TextField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
    
    def __str__(self):
        return self.user.username
