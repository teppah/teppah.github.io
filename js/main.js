$(document).ready(function () {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar').fadeIn();
        } else {
            $('.navbar').fadeOut();
        }
    })
});