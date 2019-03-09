from django.urls import include, path
from rest_framework import routers
from api_v1 import views

router = routers.DefaultRouter()


app_name = 'api_v1'

urlpatterns = [
    path('', include(routers.url)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]