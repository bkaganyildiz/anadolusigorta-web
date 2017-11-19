'use strict';

angular.module('myApp.prediction', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/prediction', {
            templateUrl: 'prediction/prediction.html',
            controller: 'PredictionCtrl'
        });
    }])

    .controller('PredictionCtrl', ['$scope','PredictionService', function ($scope,PredictionService) {

        // Set the Content-Type

        $scope.catL0 = [];
        $scope.catL3 = [];
        $scope.loading = false;

        $scope.result = {
            "0" : "",
            "41" : "",
            "9" : "",
            "30" : "",
            "31" : "",
            "42" : ""
        };

        PredictionService.getCategories().then(
            function success(response) {
                $scope.categories = response.data;
                for(var i=0;i<$scope.categories[0].length;i++){
                    $scope.catL0.push({
                        id : $scope.categories[0][i][0],
                        label : $scope.categories[0][i][1]
                    });
                }
                for(var i=0;i<$scope.categories[3].length;i++){
                    $scope.catL3.push({
                        id : $scope.categories[3][i][0],
                        label : $scope.categories[3][i][1]
                    });
                }
            },
            function error(response) {
                debugger;
            }
        );


        $scope.submitPred = function () {
            $scope.loading = true;
            PredictionService.submitPred($scope.result).then(
                function success(response) {
                    $scope.resultExist = true;
                    $scope.results = JSON.parse(response.data);
                },
                function error(response) {
                    debugger;
                }
            ).finally(
                function () {
                    $scope.loading = false;
                }
            );
        };

    }]);