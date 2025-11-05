from rest_framework import viewsets, filters
from rest_framework.permissions import AllowAny
from .models import BoardMember
from .serializers import BoardMemberSerializer


class BoardMemberViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ViewSet for viewing board members.
    Provides list and detail views.
    Allows filtering by role and searching by name.
    """
    queryset = BoardMember.objects.filter(is_active=True)
    serializer_class = BoardMemberSerializer
    permission_classes = [AllowAny]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'role', 'bio']
    ordering_fields = ['order', 'name', 'joined_date']
    ordering = ['order', 'name']

    def get_queryset(self):
        queryset = super().get_queryset()
        role = self.request.query_params.get('role', None)
        if role:
            queryset = queryset.filter(role=role)
        return queryset
