# Generated by Django 2.1.5 on 2019-09-22 21:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cats', '0003_auto_20190922_2057'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cat',
            name='email',
            field=models.EmailField(max_length=100),
        ),
    ]
