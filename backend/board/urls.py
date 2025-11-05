from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BoardMemberViewSet

router = DefaultRouter()
router.register(r'members', BoardMemberViewSet, basename='boardmember')

urlpatterns = [
    path('', include(router.urls)),
]
