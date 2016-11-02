# Bannertime Flashtalking Dynamic

Dynamic [Flashtalking](http://www.flashtalking.com/uk/dynamic-ads/) the [Bannertime](https://github.com/pyramidium/generator-bannertime) way.


## Usage

Use `gulp` to automatically launch the banner into the browser with browsersync all your changes will be reflected in the browser with each file save.

Use `gulp prod --sb` to generate a ZIP files of each banner, these will all have been minified as well. This will also create baseloader ZIP files from a template within the `./src/baseloader` directory, it will use that one template to create each different size it finds within the `./src` directory.

Use `gulp backup-gen` to automatically generate backup images for each banner. (This may take a while.)

#### Baseloader
The baseloader template files uses [gulp-nunjucks-render](https://github.com/carlosl/gulp-nunjucks-render) to create multiple baseloader ZIPs for each size.
Currently only the `bannerWidth` and `bannerHeight` are templated, and the dynamic copy itself is taken as standard default for all.

### Creating Elements

You can create DOM elements using the the `smartObject` function, this will initialise a `<div>` with the default style of: `position: absolute; top: 0; left: 0;`.

You are able to set a background image, and the `smartObject` will take on the width and height of that image, with the default background settings of `backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'`.

#### Example

```Javascript
this.logo = this.smartObject({
  backgroundImage: 'images/logo.png',
  retina: true,
  parent: this.banner
});
```

There are helper functions such as `center();`, `centerHorizontal();` and `centerVertical();` to help you position the element.

Additional settings are set using a helper function on the element which uses GSAP to process. So `this.logo.set({autoAlpha: 0, scale: 0.4});` is the same as `TweenLite.set(this.logo, {autoAlpha: 0, scale: 0.4});`

#### Example

```Javascript
this.logo.centerHorizontal();
this.logo.set({ autoAlpha: 0, top: 50 });
```

### Animating

The banner animation is run by the `Banner.prototype.animate();` function.

By default we are using TweenMax from the Google/DoubleClick CDN, this should be updated if you are switching to a different ad serving platform.

For more information about animating using GSAP head to [www.greensock.com](http://www.greensock.com)
