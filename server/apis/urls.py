from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^indexNotation', views.indexNotation, name='indexNotation'),
    url(r'^queryLocal', views.queryLocal, name='queryLocal'),
    url(r'^queryCloud', views.queryCloud, name='queryCloud'),
]
