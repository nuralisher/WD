# Generated by Django 3.0.4 on 2020-03-25 13:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20200325_1938'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='category',
        ),
        migrations.DeleteModel(
            name='Category',
        ),
        migrations.DeleteModel(
            name='Product',
        ),
    ]
