from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def view_main(request):
    return render(request, 'main.html')


def view_quiz(request):
    return render(request, 'quiz.html')


def view_industries(request):
    return render(request, 'industries.html')


def view_culture(request):
    return render(request, 'culture.html')


def view_review(request):
    return render(request, 'review.html')


def view_results(request):
    return render(request, 'results.html')


def view_title(request):
    return render(request, 'title.html')


def view_dashboard(request):
    return render(request, 'dashboard.html')
