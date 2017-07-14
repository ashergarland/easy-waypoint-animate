# easy-waypoint-animate

## Makes using waypoints to trigger Animate.css on scroll easy!

The general use case for most developers building modern websites is that they want to trigger an element to become visible with some nice simple animation when it scrolls into view.

To achieve this, the go-to solution is to combined Animate.css for the animations and Waypoints for the triggering of the animation when the element comes into view.
Doing this can get messy as developers are often lead down a path of defining css classes and initializing the waypoints for each individual element they want to animate - it quickly gets messy.

With easy-waypoint-animate it's as simple as:

`index.html`
```html
<h1 class="toBeAnimated" data-animation="fadeInUp">Hello World!</h1>
```

`scripts.js`
```javascript
$(document).ready(function() {
    onScrollInitAnimation($(".toBeAnimated"));
});
```

This will hide the `<h2>` element into it is scrolled into view and will display it with a `fadeInUp` animation from Animate.css.

If you want to customize the element to be triggered when it is 30% above the bottom of the view:

`scripts.js`
```javascript
$(document).ready(function() {
    onScrollInitAnimation($(".toBeAnimated", "30%")); <!-- waypoint now triggers at a 30% offset from the bottom, default is 90% -->
});
```

If you want to group elements to be triggered when their container scrolls into view and give each element a staggered animation delay:

`index.html`
```html
<div class="animated-group">
    <h1 class="toBeAnimated" data-animation="fadeInDown">Easy</h1> <!-- default delay is 0s -->
    <h2 class="toBeAnimated" data-animation="fadeInLeft" data-animation-delay="0.3s">Waypoint</h1>
    <h3 class="toBeAnimated" data-animation="fadeInRight" data-animation-delay="0.6s">Animate</h1>
    <h4 class="toBeAnimated" data-animation="fadeInUp" data-animation-delay="0.9s">css</h1>
</div>
```

`scripts.js`
```javascript
$(document).ready(function() {
    onScrollInitAnimation($(".toBeAnimated"), "60%", $(".animated-group"));
});
```

## Requirements

[jQuery](https://jquery.com/)
[Waypoints](http://imakewebthings.com/waypoints/) * Specifically requires the jquery version of Waypoints
[Animate.css](https://daneden.github.io/animate.css/)

# Installation
1. Copy `easy-way-point-animate.css` and `easy-waypoint-animate.js`to your website source files.
2. Link `easy-way-point-animate.css` with your other css files
```html
<link rel="stylesheet" type="text/css" href="easy-way-point-animate.css">
```
3. Link `easy-waypoint-animate.js` with your other js files
```html
<script src="js/easy-waypoint-animate.js"></script>
```
4. Make sure you have included all the other requirements javascript files
```html
<script src="js/jquery.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/jquery.waypoints.min.js"></script>
```
