from django.db import models


class Task(models.Model):
    TASK_STATUS = (
        ('Queue', 'В очереди'),
        ('In progress', 'В работе'),
        ('Done', 'Сделано')
    )

    summary = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, blank=True, null=True)
    due_date = models.DateTimeField()
    status = models.CharField(max_length=20, choices=TASK_STATUS, default='Queue')
    time_planned = models.DecimalField(max_digits=10, decimal_places=1, blank=True, null=True)

    def __str__(self):
        return self.summary
