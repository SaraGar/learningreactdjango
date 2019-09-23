from django.db import models
from django.contrib.auth.models import User


class Cat(models.Model):
    name = models.CharField(max_length=100)
    picture = models.CharField(max_length=1000,  blank=True)
    email = models.EmailField(max_length=100)
    message = models.CharField(max_length=500, blank=True)
    rescuer = models.ForeignKey(
        User, related_name="cats", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
