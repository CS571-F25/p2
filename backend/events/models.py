from django.db import models
from django.contrib.auth.models import User


class Event(models.Model):
    """
    Model representing a club event.
    """
    EVENT_TYPE_CHOICES = [
        ('workshop', 'Workshop'),
        ('social', 'Social'),
        ('volunteering', 'Volunteering'),
        ('meeting', 'Meeting'),
        ('other', 'Other'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    event_type = models.CharField(max_length=20, choices=EVENT_TYPE_CHOICES)
    date = models.DateTimeField()
    end_date = models.DateTimeField(blank=True, null=True)
    location = models.CharField(max_length=300)
    image = models.ImageField(upload_to='event_images/', blank=True, null=True)
    max_attendees = models.IntegerField(blank=True, null=True, help_text="Leave empty for unlimited")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['date']

    def __str__(self):
        return f"{self.title} - {self.date.strftime('%Y-%m-%d')}"

    @property
    def attendee_count(self):
        return self.rsvp_set.filter(status='confirmed').count()

    @property
    def is_full(self):
        if self.max_attendees:
            return self.attendee_count >= self.max_attendees
        return False
