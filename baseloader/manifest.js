FT.manifest({
  "filename": "index.html",
  "width": {{ bannerWidth }},
  "height": {{ bannerHeight }},
  "clickTagCount": 1,
  "hideBrowsers": ["ie8", "ie9"],
  "richLoads": [{
    "name": "dRichload",
    "src": "{{ bannerName }}"
  }],
  "instantAds":[
    {"name": "dRichload", "type": "richLoad"},
    {"name": "dText1", "type": "text", "default": "text1"},
    {"name": "dText2", "type": "text", "default": "text2"},
    {"name": "dText3", "type": "text", "default": "text3"},
    {"name": "dText4", "type": "text", "default": "text4"}
  ]
});
