from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def view_index(request):
    return HttpResponse("THIS IS THE HOME OF OUR APP!!!!")
