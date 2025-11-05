from django.db import models


class BoardMember(models.Model):
    """
    Model representing a board member of the club.
    """
    ROLE_CHOICES = [
        ('president', 'President'),
        ('vice_president', 'Vice President'),
        ('secretary', 'Secretary'),
        ('treasurer', 'Treasurer'),
        ('event_coordinator', 'Event Coordinator'),
        ('marketing', 'Marketing Director'),
        ('member', 'Board Member'),
    ]

    name = models.CharField(max_length=200)
    role = models.CharField(max_length=50, choices=ROLE_CHOICES)
    bio = models.TextField()
    photo = models.ImageField(upload_to='board_photos/', blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)
    github = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    order = models.IntegerField(default=0, help_text="Display order (lower numbers first)")
    is_active = models.BooleanField(default=True)
    joined_date = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return f"{self.name} - {self.get_role_display()}"
