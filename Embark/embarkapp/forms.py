from django import forms
from django.contrib.auth.models import User
from embarkapp.models import Embarker


class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['username', 'password']


class EmbarkerForm(forms.ModelForm):

    class Meta:
        model = Embarker
        fields = ['industryPrefs', 'culturePrefs', 'location']
