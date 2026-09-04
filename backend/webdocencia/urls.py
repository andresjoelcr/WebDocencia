"""URL configuration for webdocencia project."""
from django.contrib import admin
from django.urls import path, re_path

from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/chatgpt/', views.chatgpt, name='chatgpt'),
    re_path(r'^(?!admin/)(?P<path>.*)$', views.spa, name='spa'),
]