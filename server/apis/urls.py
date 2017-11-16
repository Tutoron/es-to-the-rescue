from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^indexNotation', views.indexNotation, name='indexNotation'),
    url(r'^queryLatex', views.queryLatex, name='queryLatex')
]