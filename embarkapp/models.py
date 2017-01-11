from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Embarker(models.Model):
    industryPrefs = models.CharField(default='', max_length=255)
    culturePrefs = models.CharField(default='', max_length=255)
    locationPrefs = models.CharField(default='', max_length=255)
    user = models.OneToOneField(User)

    def __str__(self):
        return self.user.username
