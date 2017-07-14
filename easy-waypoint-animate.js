function onScrollInitAnimation( items, offset, container ) {
    items.each( function() {
        var element = $(this),
        animationClass = element.attr('data-animation'),
        animationDelay = element.attr('data-animation-delay') || "0s";

        element.css({
            '-webkit-animation-delay':  animationDelay,
            '-moz-animation-delay':     animationDelay,
            'animation-delay':          animationDelay
        });

        var trigger = ( container ) ? container : element;

        trigger.waypoint(function() {
            element.addClass('animated').addClass(animationClass);
        },{
            triggerOnce: true,
            offset: offset || "90%"
        });
    });
}