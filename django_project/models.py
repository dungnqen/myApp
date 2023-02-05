from django.db import models

class Item(models.Model):
    name = models.CharField(max_length=64)
    img_path = models.CharField(max_length=64)
    in_stock_flag = models.BooleanField()
    url_path = models.CharField(max_length=64)

    def __str__(self):
        return f"{self.name}"