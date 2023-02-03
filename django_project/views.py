from django.http import HttpResponse, HttpRequest
from django.shortcuts import render


def index(request):
  return render(request, "index.html")