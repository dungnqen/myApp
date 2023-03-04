from django.http import HttpResponse, HttpRequest
from django.shortcuts import render
from .models import Item, linearMotion, cuttingTools


def index(request):
  return render(request, "index.html", {
    "items": Item.objects.all(),
    "linearMotions": linearMotion.objects.all(),
    "cuttingTools": cuttingTools.objects.all()
  })

def item_view(request, item_path):
  item = Item.objects.filter(url_path=item_path).first()
  if not item:
    item = linearMotion.objects.filter(url_path=item_path).first()
  if not item:
    item = cuttingTools.objects.filter(url_path=item_path).first()

  return render(request, "item_view.html", {
  "item": item,
  "detailsPage": f"detailsPage/{item_path}.html"
  })