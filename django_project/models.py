from django.db import models

from django.contrib import admin

class Product(models.Model):
    PU = models.FloatField()
    SU = models.FloatField()
    Qty = models.IntegerField()

class Item(models.Model):
    name = models.TextField(choices=[
        ("BT", "Bu lông Lục giác chìm đầu trụ"),
        ("BC", "Bu lông Lục giác chìm đầu cầu"),
        ("BB", "Bu lông Lục giác chìm đầu bằng"),
        ("VT", "Vít Trí"),
        ("VP", "Vít Pake"),
        ("BN", "Bu lông Lục giác ngoài"),
        ("RC", "Ren cấy"),
        ("DO", "Đai Ốc"),
        ("LP", "Long đen phẳng"),
        ("LV", "Long đen vênh"),
        ("PC", "Phe cài"),
        ("VK", "Vít tự khoan"),
        ("TR", "Ty ren"),
        ("TK", "Tắc kê"),
        ("RV", "Rivet"),
        ("CU", "Cùm U"),
        ("BM", "Bu Lông Mắt"),
        ("DS", "Đai siết")
        ])
    img_path = models.CharField(max_length=64)
    in_stock_flag = models.BooleanField()
    url_path = models.CharField(max_length=64)
    item_desc = models.TextField(blank=True)
    item_tech_info = models.TextField(blank=True)
    orderIndex = models.PositiveIntegerField(choices=[(i, str(i)) for i in range(1,100)])

    def __str__(self):
        return f"{self.get_name_display()}"

class Screw(Product):
    name = models.TextField(choices=[
        ("BT", "Bu lông Lục giác chìm đầu trụ"),
        ("BC", "Bu lông Lục giác chìm đầu cầu"),
        ("BB", "Bu lông Lục giác chìm đầu bằng")
        ])
    M = models.FloatField(choices=[(m/10.0, str(m/10.0)) for m in range(10, 500, 5)])
    length = models.IntegerField(choices=[(l, str(l)) for l in range(1, 200, 1)])
    material = models.TextField(choices=[
        ("304", "SUS304"),
        ("201", "SUS201"),
        ("TC", "Thép Carbon")
        ])

    def __str__(self):
        return f"{self.name}-{self.material}-M{self.M}X{int(self.length)}"

class linearMotion(models.Model):
    name = models.TextField(choices=[
        ("LG", "Thanh Trượt"),
        ("LS", "Vít me Đai ốc"),
        ("LH", "Trục trượt"),
        ("BS", "Bạc trượt"),
        ("CC", "Máng cáp"),
        ("SU", "Gối đỡ"),
        ("SS", "Đỡ trục"),
        ("SC", "Kẹp trục"),
        ("AA", "Tay robot"),
    ])
    img_path = models.CharField(max_length=64)
    in_stock_flag = models.BooleanField()
    url_path = models.CharField(max_length=64)
    item_desc = models.TextField(blank=True)
    item_tech_info = models.TextField(blank=True)

    def __str__(self):
        return f"{self.get_name_display()}"

class cuttingTools(models.Model):
    name = models.TextField(choices=[
        ("EM", "Dao phay ngón"),
        ("DB", "Mũi khoan"),
        ("TT", "Dao tiện"),
        ("HT", "Mũi Taro ren"),
    ])
    img_path = models.CharField(max_length=64)
    in_stock_flag = models.BooleanField()
    url_path = models.CharField(max_length=64)
    item_desc = models.TextField(blank=True)
    item_tech_info = models.TextField(blank=True)

    def __str__(self):
        return f"{self.get_name_display()}"