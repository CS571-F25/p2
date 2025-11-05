from rest_framework import serializers
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    """
    Serializer for Event model.
    """
    event_type_display = serializers.CharField(source='get_event_type_display', read_only=True)
    attendee_count = serializers.IntegerField(read_only=True)
    is_full = serializers.BooleanField(read_only=True)

    class Meta:
        model = Event
        fields = [
            'id',
            'title',
            'description',
            'event_type',
            'event_type_display',
            'date',
            'end_date',
            'location',
            'image',
            'max_attendees',
            'attendee_count',
            'is_full',
            'is_active',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class EventListSerializer(serializers.ModelSerializer):
    """
    Lightweight serializer for event listings.
    """
    event_type_display = serializers.CharField(source='get_event_type_display', read_only=True)
    attendee_count = serializers.IntegerField(read_only=True)

    class Meta:
        model = Event
        fields = [
            'id',
            'title',
            'event_type',
            'event_type_display',
            'date',
            'location',
            'image',
            'attendee_count',
        ]
