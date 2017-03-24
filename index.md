---
layout: page
css: ["index.css"]
---
<div class="row">
{% for post in site.posts %}
    <div class="col s12">
      <div class="card hoverable">
        <div class="card-content">
          <span id="post-title" class="card-title">{{post.title}}</span>
          <p id="post-date"><i class="material-icons">date_range</i>&#9;{{post.date | date: "%d/%m/%Y %H:%M"}}</p>
          <p id="post-content">{{post.excerpt | remove: '<p>' | remove: '</p>'}}</p>
        </div>
        <div class="card-action">
          <a href="{{post.url | prepend: site.baseurl}}">
            Read More
          </a>
        </div>
      </div>
    </div>
{% endfor %}
</div>