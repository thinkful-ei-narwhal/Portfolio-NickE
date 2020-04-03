import './styles/index.css';
import $ from 'jquery';
function burgerListener() {
  $('.nav-container').on('click', '.burger-nav', event => {
    $('.dropdown-content').toggle('.dropdown-content');
  });
}

$(burgerListener);