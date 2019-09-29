# Tagir's Personal Website

This repo provides the Github Pages code for Tagir's personal website which combines all his blogs and pages into
a single site. By pushing to the 'master' branch, Github will automatically generate a new website from the files and
configuration in this repo so please make changes on a branch to merge if you want to make significant changes.

## Local setup

Github Pages runs on [Jekyll](https://jekyllrb.com/) and can be run locally by following these setup instructions: 

https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/

Once you have setup Jekyll locally with this repo you can then run the site locally using the following command
which will automatically regenerate pages as you make changes to the files in this repo:

```
bundle exec jekyll serve -w
```

To view draft blog posts add the `--drafts` flag to the end.

## Pages and Navigation

The site is broken up into several collections for different parts of the site:

* `_pages`: This contains all the main website pages such as the home page, product pages, landing pages and essentially
any pages required for the main marketing website
* `_posts`: All blog posts should go under this folder with their date at the beginning of the filename to appear in the blog
section of the site. You can also create draft posts for review and scheduling under the `_drafts` folder of the site.