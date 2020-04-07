$('#me').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.me').offset().top
    }, 1000)
})
$('#room').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.room').offset().top
    }, 1000)
})
$('#services').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.services').offset().top
    }, 1000)
})
$('#contact').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.contact').offset().top
    }, 1000)
})
$('#arrow_up').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.main').offset().top
    }, 1000)
})