# Generated by Django 3.1.2 on 2020-11-03 10:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_auto_20201103_1624'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='iamge',
            new_name='image',
        ),
    ]
