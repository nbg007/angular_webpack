import './home.less';

import routing from './home.routes.js';

import HomeController from './home.controller.js';

export default angular.module('home', [])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;