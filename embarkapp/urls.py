from django.conf.urls import url
from embarkapp import views

urlpatterns = [
    url(r'^main$', views.view_main, name='main'),
    url(r'^quiz$', views.view_quiz, name='quiz'),
    url(r'^industries$', views.view_industries, name='industries'),
    url(r'^culture$', views.view_culture, name='culture'),
    url(r'^review$', views.view_review, name='review'),
    url(r'^jobslist$', views.view_jobslist, name='results'),
    url(r'^title$', views.view_title, name='title'),
    url(r'^dashboard$', views.view_dashboard, name='dashboard'),
]
