from django.contrib import admin
from .models import Item, Screw, linearMotion, cuttingTools

admin.site.register(Item)
admin.site.register(Screw)
admin.site.register(linearMotion)
admin.site.register(cuttingTools)