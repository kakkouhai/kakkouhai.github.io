$(function () {
  $(window).on('scroll', function () {
    if ($('.change').height() < $(this).scrollTop()) {
      $('.header').addClass('change-color');
    } else {
      $('.header').removeClass('change-color');
    }
  });
});
$(function () {
  $('html,body').animate({ scrollTop: 0 }, '1');
});

document.querySelector('.hambarger').addEventListener('click', function () {
  var hambarger = document.querySelector('.hambarger');
  var menu = document.querySelector('.menus');
  hambarger.classList.toggle('active');
  menu.classList.toggle('active');
});

document.querySelector('.book').addEventListener('click', function () {
  var book = document.querySelector('.book');
  book.classList.toggle('active');

});

