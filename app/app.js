'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.version',
    'myApp.recommend',
    'myApp.analyze',
    'myApp.prediction',
    'angularjs-dropdown-multiselect'
]).config(['$locationProvider', '$routeProvider','$httpProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/recommend'});

/*    $routeProvider.when('/index', {
        templateUrl: '/index.html'
    });*/

    //$httpProvider.defaults.headers.common['X-CSRFToken'] = '{{ csrf_token|escapejs }}';

    //$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    //$httpProvider.defaults.xsrfCookieName = 'csrftoken';
}]);
