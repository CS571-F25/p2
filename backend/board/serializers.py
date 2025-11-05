from rest_framework import serializers
from .models import BoardMember


class BoardMemberSerializer(serializers.ModelSerializer):
    """
    Serializer for BoardMember model.
    """
    role_display = serializers.CharField(source='get_role_display', read_only=True)

    class Meta:
        model = BoardMember
        fields = [
            'id',
            'name',
            'role',
            'role_display',
            'bio',
            'photo',
            'email',
            'linkedin',
            'github',
            'twitter',
            'order',
            'is_active',
            'joined_date',
        ]
        read_only_fields = ['id', 'joined_date']
