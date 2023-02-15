from django.http import HttpResponse, HttpRequest
from django.shortcuts import render
from .models import Item, Screw


def index(request):
  return render(request, "index.html", {
    "items": Item.objects.all()
  })

def item_view(request, item_path):
  item = Item.objects.get(url_path=item_path)
  screws = Screw.objects.filter(name=item.name)
  return render(request, "item_view.html", {
    "item": item,
    "screws": screws
  })

