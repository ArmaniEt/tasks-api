from rest_framework import serializers
from webapp.models import Task


class TaskSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='api_v1:task-detail')

    class Meta:
        model = Task
        fields = ('id', 'summary', 'url', 'description', 'due_date', 'status', 'time_planned')
