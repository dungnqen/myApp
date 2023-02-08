from django.http import HttpResponse, HttpRequest
from django.shortcuts import render
from .models import Item


def index(request):
  return render(request, "index.html", {
    "items": Item.objects.all()
  })
