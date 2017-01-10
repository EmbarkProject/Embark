from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Embarker(models.Model):
    industryPrefs = models.IntegerField(default=0)
    culturePrefs = models.IntegerField(default=0)
    locationPrefs = models.IntegerField(default=0)
    user = models.OneToOneField(User)

    def __str__(self):
        return self.user.username
