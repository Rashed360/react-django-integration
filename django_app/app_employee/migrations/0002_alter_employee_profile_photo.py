# Generated by Django 4.0.2 on 2022-02-26 23:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_employee', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='profile_photo',
            field=models.CharField(max_length=100),
        ),
    ]
