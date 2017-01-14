# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-01-13 15:41
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('embarkapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Industry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('searchid', models.IntegerField(default=0)),
                ('searchname', models.CharField(max_length=25)),
                ('icon', models.CharField(max_length=25)),
            ],
        ),
    ]
