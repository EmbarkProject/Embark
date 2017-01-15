"""embark URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers
from embarkapp import views
from django.views.generic import TemplateView
from django.contrib.auth import views as auth_views


router = routers.DefaultRouter()
router.register(r'PostEmbarker', views.EmbarkerViewSetPost)
router.register(r'GetEmbarker', views.EmbarkerViewSetGet)
router.register(r'User', views.UserView, 'list')
router.register(r'Industry', views.IndustryView)

urlpatterns = [
    url(r'^embark/', include('embarkapp.urls')),
    url(r'^logout/$', auth_views.logout, {'next_page': '/embark/main'}, name='logout'),
    # url(r'^login/$', views.view_main, name=)
    url('^', include('django.contrib.auth.urls')),
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^admin/', admin.site.urls),
]
