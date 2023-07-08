#!/usr/bin/env bash


echo "---
permalink: /404.html
---
" > "./dist/angular_pwa/404.html"
cat "./dist/angular_pwa/index.html" >> "./dist/angular_pwa/404.html"

