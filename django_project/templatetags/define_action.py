from django import template
register = template.Library()

@register.simple_tag
def addToSet(*args):
  return args