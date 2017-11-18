'use strict';

angular.module('myApp.prediction', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/prediction', {
            templateUrl: 'prediction/prediction.html',
            controller: 'PredictionCtrl'
        });
    }])

    .controller('PredictionCtrl', ['$scope', function ($scope, RecommendService) {

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