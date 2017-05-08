{% if theme.special_effects.collapse_code !== undefined %}
  <script type="text/javascript">var line_limit = {{ theme.special_effects.collapse_code }}</script>
  <script type="text/javascript" src="/js/src/collapse-code.js"></script>
{% endif %}

{% if theme.special_effects.love %}
  <script type="text/javascript" src="/js/src/love.js"></script>
{% endif %}
