var InitWaypointAnimations = (function () {
    function onScrollInitAnimation(items, container, options) {
        const containerOffset = ( container ) ? container.attr("data-animation-offset") || options.offset : null;
        items.each( function() {
            const element = $(this),
            animationClass = element.attr("data-animation"),
            animationDelay = element.attr("data-animation-delay") || options.delay,
            animationOffset = element.attr("data-animation-offset") || options.offset;

            element.css({
                "-webkit-animation-delay":  animationDelay,
                "-moz-animation-delay":     animationDelay,
                "animation-delay":          animationDelay,
                "opacity":                  0
            });

            const trigger = ( container ) ? container : element;

            trigger.waypoint(function() {
                element
                    .addClass("animated")
                    .addClass(animationClass)
                    .css({
                        "opacity": 1
                    });
            },{
                triggerOnce: true,
                offset: containerOffset || animationOffset
            });
        });
    }
    
    function InitWaypointAnimations(defaults) {
        const options = {
            offset: defaults.offset || "90%",
            delay: defaults.delay || "0s",
            animateClass: defaults.animateClass || "ez-animate",
            animateGroupClass: defaults.animateGroupClass || "ez-animate-group"
        }

        const animateGroupClassSelector = classToSelector(options.animateGroupClass);
        const animateClassSelector = classToSelector(options.animateClass);

        // Attach waypoint animations to grouped animate elements
        $(animateGroupClassSelector).each((index, group) => {
            const container = $(group);
            const items = $(group).find(animateClassSelector);
            onScrollInitAnimation(items, container, options);
        });

        // Attach waypoint animations to ungrouped animate elements
        $(animateClassSelector)
        .filter((index, element) => {
            return $(element).parents(animateGroupClassSelector).length === 0;
        })
        .each((index, element) => {
            onScrollInitAnimation($(element), null, options);
        });
    }

    function classToSelector(className) {
        return "." + className;
    }

    return InitWaypointAnimations;
}());