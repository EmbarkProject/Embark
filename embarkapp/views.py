from django.shortcuts import render
from django.contrib.auth import login
from django.contrib.auth.models import User
from rest_framework import viewsets
from .forms import LoginForm
from .models import Embarker
from .serializers import EmbarkerSerializer
from django.http import HttpResponseRedirect

# Create your views here.


class EmbarkerViewSet(viewsets.ModelViewSet):

    queryset = Embarker.objects.all().order_by('id')
    serializer_class = EmbarkerSerializer





def view_main(request):
    form = LoginForm(request.POST or None)
    if request.POST and form.is_valid():
        user = form.login(request)
        if user:
            login(request, user)
            return HttpResponseRedirect("/embark/quiz")
    return render(request, 'main.html')


def view_quiz(request):
    return render(request, 'quiz.html')


def view_industries(request):
    return render(request, 'industries.html')


def view_culture(request):
    return render(request, 'culture.html')


def view_review(request):
    return render(request, 'review.html')


def view_jobslist(request):
    return render(request, 'jobslist.html')


def view_title(request):
    return render(request, 'title.html')


def view_dashboard(request):
    return render(request, 'dashboard.html')
