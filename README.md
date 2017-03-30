# MatJek

A responsive [Material](https://material.io/) theme based on [Materialize.css](http://materializecss.com/) for jekyll sites.

## Features

* Google Analytics
* Disqus
* [GitHub project page](https://shawnteoh.github.io/matjek/projects/)
* [Tags](https://shawnteoh.github.io/matjek/tags/) and [Categories](https://shawnteoh.github.io/matjek/categories/)
* Modular CSS and JS includes ([example](https://github.com/ShawnTeoh/matjek/blob/gh-pages/projects.md/))
* [Fancy "About" page](https://shawnteoh.github.io/matjek/about)

## Installation

Clone or fork this repo and edit `_config.yml` as needed.

## Configuration

Most of the configurations can be found in `_config.yml`. The configurations listed below are specific to MatJek. If you are not using `google_tracking_id` or `disqus_shortname`, just remove them completely.

```yaml
github_profile: "github_profile_url"
user: "your_name" # Appears at sidebar
user_email: "your_email" # Appears at sidebar, remove whole variable if unwanted
contact_url: "google_form_link"
google_tracking_id: "google_analytics_ID"
disqus_shortname: "shortname_given_by_Disqus"
```

Edit the images in `assets/res` to suit your liking, but try to stick to the original resolutions.

If you would like to enable comments in a post (disqus_shortname must be provided), add this line to the front matter of the post.

```yaml
comments: 1
```

Add tags and categories to your posts in the front matter as well. Multiple tags/categories can be assigned but need to be separated by spaces.

```yaml
categories: default default2
tags: test test2
```

## Contributing

Bug reports and pull requests are welcomed on GitHub at https://github.com/shawnteoh/matjek. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, clone/fork the repo and run `bundle install`.

To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000/matjek/`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

## License

The theme is available as open source under the terms of the [GPL v3 License](https://www.gnu.org/licenses/gpl-3.0.en.html).

## Libraries
* [Materialize.css](http://materializecss.com/)
* [GeoPattern](https://github.com/btmills/geopattern/)
* [Animate.css](https://daneden.github.io/animate.css/)
* [Morphtext](http://morphext.fyianlai.com/)

## References
* https://github.com/DONGChuan/Yummy-Jekyll/
* https://github.com/codinfox/codinfox-lanyon/