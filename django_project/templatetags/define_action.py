from django import template
register = template.Library()

@register.simple_tag
def addHtmlbulonglucgiacchimdautru():
  return """
  <p>123 test</p>
  """