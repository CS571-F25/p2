from rest_framework import viewsets, filters
from rest_framework.permissions import AllowAny
from rest_framework.decorators import action
from rest_framework.response import Response
from django.utils import timezone
from .models import Event
from .serializers import EventSerializer, EventListSerializer


class EventViewSet(viewsets.ReadOnlyModelViewSet):
    """
    ViewSet for viewing events.
    Provides list and detail views.
    Allows filtering by event type and searching.
    """
    queryset = Event.objects.filter(is_active=True)
    permission_classes = [AllowAny]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description', 'location']
    ordering_fields = ['date', 'created_at']
    ordering = ['date']

    def get_serializer_class(self):
        if self.action == 'list':
            return EventListSerializer
        return EventSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        event_type = self.request.query_params.get('type', None)
        upcoming = self.request.query_params.get('upcoming', None)

        if event_type:
            queryset = queryset.filter(event_type=event_type)

        if upcoming:
            queryset = queryset.filter(date__gte=timezone.now())

        return queryset

    @action(detail=False, methods=['get'])
    def upcoming(self, request):
        """Get upcoming events"""
        events = self.get_queryset().filter(date__gte=timezone.now())[:5]
        serializer = EventListSerializer(events, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def stats(self, request):
        """Get event statistics for the home page"""
        total_events = self.get_queryset().count()
        upcoming_events = self.get_queryset().filter(date__gte=timezone.now()).count()

        return Response({
            'total_events': total_events,
            'upcoming_events': upcoming_events,
        })
