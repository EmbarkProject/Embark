from rest_framework import serializers
from .models import Embarker
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')


class EmbarkerSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Embarker
        fields = ('user', 'industryPrefs', 'culturePrefs', 'locationPrefs')
