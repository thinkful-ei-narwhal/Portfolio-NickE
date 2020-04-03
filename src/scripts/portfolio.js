import $ from 'jquery';

function burgerListener() {
  $('.nav-container').on('click', '.burger-nav', function (event) {
    event.preventDefault();
    $('.dropdown-content').toggle('.dropdown-content');
  });
}

const anchorListener = function () {
  $('.js-nav').on('click', 'a.menu-button', function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: ($($(this).attr('href')).offset().top - 150) }, 800);
  });
};

function handleListeners() {
  burgerListener();
  anchorListener();
}

export default {
  handleListeners
};