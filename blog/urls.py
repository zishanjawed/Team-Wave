
from django.urls import path
from .views import home,quest_form_api


urlpatterns = [
    path('',home,name='home'),
    path('api/<path:query>',quest_form_api,name='api')
]