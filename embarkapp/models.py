from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Embarker(models.Model):
    jobTitle = models.CharField(max_length=255)
    industryPrefs = models.CharField(default='', max_length=255)
    culturePrefs = models.CharField(default='', max_length=255)
    locationPrefs = models.CharField(default='', max_length=255)
    user = models.OneToOneField(User)

    def __str__(self):
        return self.user.username


class Industry(models.Model):
    title = models.CharField(max_length=50)
    searchid = models.IntegerField(default=0)
    searchname = models.CharField(max_length=25)
    icon = models.CharField(max_length=25)
    resources = models.CharField(max_length=255)
