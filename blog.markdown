--- layout: default ---
{%- if page.title -%}
{{ page.title }}
{%- endif -%} {{ content }} {%- if site.posts.size > 0 -%}
{{ page.list_title | default: "Posts" }}
{%- for post in site.posts -%}
{%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%} {{ post.date | date: date_format }}
{{ post.title | escape }}
{%- if site.show_excerpts -%} {{ post.excerpt }} {%- endif -%}
{%- endfor -%}

{%- endif -%}