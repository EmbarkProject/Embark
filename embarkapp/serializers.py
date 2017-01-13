from rest_framework import serializers
from .models import Embarker, Industry
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
            )
        user.set_password(validated_data['password'])
        user.save()
        return user

    class Meta:
        model = User
        fields = ['id', 'password', 'email', 'username', 'first_name', 'last_name']
        read_only_fields = ['is_staff', 'is_superuser', 'is_active',
                            'date_joined', ]


class EmbarkerSerializerGet(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Embarker
        fields = ('user', 'jobTitle', 'industryPrefs', 'culturePrefs', 'locationPrefs')


class EmbarkerSerializerPost(serializers.ModelSerializer):

    class Meta:
        model = Embarker
        fields = ('user', 'jobTitle', 'industryPrefs', 'culturePrefs', 'locationPrefs')


class IndustrySerializer(serializers.ModelSerializer):

    class Meta:
        model = Industry
        fields = ('title', 'searchid', 'searchname', 'icon', 'resources')
