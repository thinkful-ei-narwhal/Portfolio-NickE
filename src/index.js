import './styles/index.css';
import $ from 'jquery';
function burgerListener() {
  $('.nav-container').on('click', '.burger-nav', event => {
    $('.dropdown-content').toggle('.dropdown-content');
  });
}


//anchor listener testing
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

$(handleListeners);