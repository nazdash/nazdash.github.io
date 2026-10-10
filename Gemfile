# frozen_string_literal: true

source "https://rubygems.org"

# GitHub Pages pins Jekyll and the plugins it supports; keep this one gem in sync with
# https://pages.github.com/versions/
gem "github-pages", "~> 232", group: :jekyll_plugins

# Needed by `jekyll serve` on Ruby >= 3.0
gem "webrick", "~> 1.8"

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
