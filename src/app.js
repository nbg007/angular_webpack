import './style/main.less';

import angular from 'angular';

import uirouter from 'angular-ui-router';

import routing from './app.config';

import home from './features/home';

angular.module('app', [
                        uirouter,
                        routing,
                        home
                    ]);