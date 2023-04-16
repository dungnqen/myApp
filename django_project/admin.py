from django.contrib import admin
from .models import Item, Screw, linearMotion, cuttingTools, rubberParts

admin.site.register(Item)
admin.site.register(Screw)
admin.site.register(linearMotion)
admin.site.register(cuttingTools)
admin.site.register(rubberParts)
