import template from './home.html';

routes.$inject = ['$stateProvider'];

import HomeController from './home.controller.js';

export default function routes($stateProvider) {
    $stateProvider.state('home', {
            url: '/home',
            template: template,
            controller: HomeController,
            controllerAs:'home'
        })
}