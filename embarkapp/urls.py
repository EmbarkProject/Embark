from django.conf.urls import url
from embarkapp import views

urlpatterns = [
    url(r'^$', views.view_index, name='index'),
]
