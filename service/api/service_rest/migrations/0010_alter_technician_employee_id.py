# Generated by Django 4.0.3 on 2023-04-27 17:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0009_alter_technician_employee_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='technician',
            name='employee_id',
            field=models.CharField(max_length=200),
        ),
    ]
