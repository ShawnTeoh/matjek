---
layout: default
---
<div class="row">
{% for post in site.posts %}
    <div class="col s12">
      <div class="card">
        <div class="card-content">
          <span class="card-title tooltipped" data-position="top" data-delay="20" data-tooltip="{{post.date | date: "%d/%m/%Y %H:%M"}}">{{ post.title }}</span>
          <p>{{ post.excerpt }}</p>
        </div>
        <div class="card-action">
          <a href="{{ post.url | prepend: site.baseurl }}">
            Read More
          </a>
        </div>
      </div>
    </div>
{% endfor %}
</div>
