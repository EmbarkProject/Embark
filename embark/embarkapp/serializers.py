from rest_framework import serializers
from .models import Embarker
from django.contrib.auth.models import User


class EmbarkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Embarker
        fields = ['id', 'user', 'industryPrefs', 'culturePrefs', 'location']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name',
                  'last_name', 'email', 'embarker']
