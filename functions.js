;(function ($) {
    'use strict';
    var $body = $('html, body'),
        $main = $('#main'),
        options = {
            prefetch: true,
            pageCacheSize: 4,
            onStart: {
                duration: 250,
                render: function (url, $container) {
                    $body.animate({
                        scrollTop: 0
                    });
                    $main.addClass('is-exiting');
                    smoothState.restartCSSAnimations();
                }
            },
            onEnd: {
                duration: 0,
                render: function (url, $container, $content) {
                    $main.removeClass('is-exiting');
                    $main.html($content);

                }
            }
        },
        smoothState = $main.smoothState(options).data('smoothState');
    window.smoothstate = smoothState;
})(jQuery);

// $(document).ready(function(){
//     $("#main").click(function(){
//         render: $('#main').addClass('is-exiting');
//     });
// }); 