# Generated by Django 2.0.5 on 2020-05-25 03:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_remove_questionmodel_number'),
    ]

    operations = [
        migrations.RenameField(
            model_name='questionmodel',
            old_name='query',
            new_name='Query',
        ),
    ]
