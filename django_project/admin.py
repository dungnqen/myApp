from django.contrib import admin
from .models import Item, Screw, linearMotion

admin.site.register(Item)
admin.site.register(Screw)
admin.site.register(linearMotion)