'use strict';

angular.module('myApp.recommend', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/recommend', {
            templateUrl: 'recommend/recommend.html',
            controller: 'RecommendCtrl'
        });
    }])

    .controller('RecommendCtrl', ['$scope', 'RecommendService', function ($scope, RecommendService) {

        // Set the Content-Type

        $scope.getUser = function () {
            RecommendService.getUserList().then(
                function success(response) {
                    debugger;
                },
                function error(response) {
                    debugger;
                }
            );
        }

    }]);