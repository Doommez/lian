$(document).ready(function () {
    $('.thumbs a').click(function (e) {
        $('.largeImg img').hide().attr('src', $(this).attr('href')).fadeIn(500);
        e.preventDefault();
    })
})
$(function () {
    $('.slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplay: 500
    })
})

function hideB1() {
    $('#Block1').fadeOut(0),
        $('#Block2').fadeIn(1000);
}
function showB1() {
    $('#Block2').fadeOut(0);
    $('#Block1').fadeIn(1000);
}
function showHome() {
    if ($(window).width() >= '1140') {
        $('#buttonHome').fadeOut(0);
        $('#homeBlockhiden1').fadeIn(1000);
        $('#homeBlockhiden2').fadeIn(1000);
    }
    else {
        $('#buttonHome').fadeOut(0);
        $('#homeBlockhiden2').fadeIn(1000);
        $('#homeBlockhiden3').fadeIn(1000);
    }
}
function firstHome() {
    $('.container__href-menu a').click(function (e) {
       e.preventDefault(); })
    $('#hidenWeb').fadeOut(500);
           
       
       
}
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
