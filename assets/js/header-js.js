function productsCarousel(selector,rows,slidesToShow,slidesToScroll){
    if (selector.length) {
        arrowsplace = selector.prev('.title');
        selector.slick({
            rows: rows,
            slidesPerRow: 1,
            appendArrows: arrowsplace,
            slidesToShow:slidesToShow,
            slidesToScroll: slidesToScroll,
            speed: 500,
            infinite: false,
            responsive: [{
                breakpoint: 1401,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: slidesToScroll
                }
            },{
                breakpoint: 1201,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToShow: 2,
                    slidesToScroll: slidesToScroll
                }
            }, {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }
}
// timeout for resize event
function debouncer(func, timeout) {
    var timeoutID, timeout = timeout || 500;
    return function() {
        var scope = this,
            args = arguments;
        clearTimeout(timeoutID);
        timeoutID = setTimeout(function() {
            func.apply(scope, Array.prototype.slice.call(args));
        }, timeout);
    }
}