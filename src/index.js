import './styles/index.css';
import $ from 'jquery';
import portfolio from './scripts/portfolio';

const main = function () {
  portfolio.handleListeners();
};

$(main);