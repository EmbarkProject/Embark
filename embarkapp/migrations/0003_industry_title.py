# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-01-13 15:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('embarkapp', '0002_industry'),
    ]

    operations = [
        migrations.AddField(
            model_name='industry',
            name='title',
            field=models.CharField(default='title', max_length=50),
            preserve_default=False,
        ),
    ]