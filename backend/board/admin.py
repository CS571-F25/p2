from django.contrib import admin
from .models import BoardMember


@admin.register(BoardMember)
class BoardMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'role', 'email', 'order', 'is_active']
    list_filter = ['role', 'is_active']
    search_fields = ['name', 'email', 'bio']
    ordering = ['order', 'name']
    list_editable = ['order', 'is_active']
