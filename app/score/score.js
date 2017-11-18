'use strict';

angular.module('myApp.score', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/score', {
            templateUrl: 'score/score.html',
            controller: 'ScoreCtrl'
        });
    }])

    .controller('ScoreCtrl', ['$scope', "$http", function ($scope, $http) {


        $scope.loading = true;
        $http.get('/recommend/predictionScores/').then(
            function success(response) {
                debugger;
                $scope.result = JSON.parse(response.data);
            },
            function error(response) {
                debugger;
                console.log(response);
            }).finally(function () {
                $scope.loading = false;
            }
        )
    }]);