# easy-waypoint-animate

**Makes using waypoints to trigger Animate.css on scroll easy!**

The general use case for most developers building modern websites is that they want to trigger an element to become visible with some nice simple animation when it scrolls into view.

To achieve this, the go-to solution is to combined Animate.css for the animations and Waypoints for the triggering of the animation when the element comes into view.
Doing this can get messy as developers are often led down a path of defining css classes and initializing the waypoints for each and every element they want to animate - it quickly gets messy.

**I don't want to clog up my website with a bunch of CSS classes and javascript snippits just to handle animations!**

With easy-waypoint-animate we get rid of all the extra CSS classes and Javascript snippits, keeping things simple for you with just a little HTML flair.

The best way to define animation and behaviors in general for elements is through data attributes. We will use data attributes to specify the type of animations our elements will perform.

With easy-waypoint-animate it's as simple as:

`index.html`
```html
<h1 class="ez-animate" data-animation="fadeInUp">Hello World!</h1>
```

`scripts.js`
```javascript
$(document).ready(function() {
    InitWaypointAnimations();
});
```

As you can see we added the class `ez-animate` and added our animation type with `data-animation="fadeInUp"`.

This will hide the `<h2>` element into it is scrolled into view and will display it with a `fadeInUp` animation from Animate.css.

To view all supported animation types, check out [Animate.css](https://daneden.github.io/animate.css/).

## Customize your element animations in HTML

* Add class `ez-animate` to elements you want animated.
* Add `data-attribute` to set elements' Animate.css animation
* Add `data-attribute-delay` to set elements` animation delay
* Add `data-attribute-offset` to set elements' trigger offset
* Add class `ez-animate-group` to containers around your `ez-animate` elements for group triggered animations (useful for staggered animations).

Read below for more detailed information.

### Animation Delay 

If you want your animation to occur 0.5 seconds after it has scrolled into view:

`index.html`
```html
<h1 class="ez-animate" data-animation="fadeInUp" data-animation-delay="0.5s">Hello World!</h1>
```
### Trigger Offset

The trigger offset changes the location of point at which when the user scrolls passed will trigger the animation to occur. 
By default the trigger offset is set to `"90%"` which is 90% of the total viewport's height (10% from the bottom).
If you want to customize the element to be triggered when it is 30% above the bottom of the view you can set it to 60%:

`index.html`
```html
<h1 class="ez-animate" data-animation="fadeInUp" data-animation-offset="60%">Hello World!</h1>
```

You can also specify it by the number of pixels by passing a number:

`index.html`
```html
<h1 class="ez-animate" data-animation="fadeInUp" data-animation-offset=250>Hello World!</h1>
```

This will trigger the animation when the element is 250px from the top.

Check out all the supported offset types in the [Waypoints documentation for offset](http://imakewebthings.com/waypoints/api/offset-option/).

### Group triggered animations and staggered animations

If you want to group elements to be triggered when their container scrolls into view and give each element a staggered animation delay, add the `ez-animate-group` and give each a different animation delay:

`index.html`
```html
<div class="ez-animate-group" data-animation-offset="50%">
    <h1 class="ez-animate" data-animation="fadeInDown">Easy</h1> <!-- default delay is 0s -->
    <h2 class="ez-animate" data-animation="fadeInLeft" data-animation-delay="0.3s">Waypoint</h1>
    <h3 class="ez-animate" data-animation="fadeInRight" data-animation-delay="0.6s">Animate</h1>
    <h4 class="ez-animate" data-animation="fadeInUp" data-animation-delay="0.9s">css</h1>
</div>
```

Animation elements that are contained grouped in a container will use the `data-animation-offset` of the container and ignore their own attribute. 

If a animation group element does not have the `data-animation-offset` attribute set then it will use the default of `"90%"`.

## Configuring the defaults

The defaults are able to be customized with our `InitWaypointAnimations` function.

### Defaults

* delay - Set the default animation delay for all elements. Default is `"0s"`.
* offset - Set the default animation trigger offset for all elements and container groups. Default is `"90%"`.
* animateClass - Set the class name for animation elements. Default is `"ez-animate"`.
* animateGroupClass - Set the class name for animation element group containers. Default is `"ez-animate-group"`.

`scripts.js`
```javascript
$(document).ready(function() {
    InitWaypointAnimations({
        delay: "0.5s",
        offset: "50%",
        animateClass: "animate-on-scroll",
        animateGroupClass: "animate-group-on-scroll"
    });
});
```

## Easiest way to use this!

If you don't want to deal with setting the `data-animation-delay` or the `data-animation-offset` on every element, then take advantage of defaults.

Set the defaults to what you want, add the animate class to your element and BOOM you're done.

You could always spruce it up a little bit by adding a animation group container for some fancy staggered animation using delays, but that is honestly just a special case for you now. 

Now you can just set everything up once using the defaults, add one class name to a few elements, maybe get fancy in a couple areas, and you're done.

# Live Demo

Check out the live demo website here [http://onetree.azurewebsites.net/](http://onetree.azurewebsites.net/)

And the source code for the website is available here: [https://github.com/ashergarland/webdev-OneTree](https://github.com/ashergarland/webdev-OneTree)

## Requirements

- [jQuery](https://jquery.com/)
- [Waypoints](http://imakewebthings.com/waypoints/) * Specifically requires the jquery version of Waypoints
- [Animate.css](https://daneden.github.io/animate.css/)

## Installation
1. Copy `easy-waypoint-animate.js`to your website source files.
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

