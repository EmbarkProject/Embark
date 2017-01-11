from django import forms
from django.contrib.auth.models import User
from embarkapp.models import Embarker
from django.contrib.auth import authenticate


class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['username', 'password']


class EmbarkerForm(forms.ModelForm):

    class Meta:
        model = Embarker
        fields = ['industryPrefs', 'culturePrefs', 'locationPrefs']


class LoginForm(forms.Form):
    username = forms.CharField(max_length=40, required=True)
    password = forms.CharField(widget=forms.PasswordInput, required=True)

    def clean(self):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        user = authenticate(username=username, password=password)
        if not user or not user.is_active:
            raise forms.ValidationError("Sorry, that login was invalid. Please try again.")
        return self.cleaned_data

    def login(self, request):
        username = self.cleaned_data.get('username')
        password = self.cleaned_data.get('password')
        print(username)
        print(password)
        user = authenticate(username=username, password=password)
        print(user)
        return user
