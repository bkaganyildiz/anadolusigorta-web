'use strict';

angular.module('myApp.recommend', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/recommend', {
            templateUrl: 'recommend/recommend.html',
            controller: 'RecommendCtrl'
        });
    }])

    .controller('RecommendCtrl', ['$scope', 'RecommendService', function ($scope, RecommendService) {

        RecommendService.getAllPolicies().then(
            function success(response) {
                $scope.policies = JSON.parse(response.data);
                debugger;
            },
            function error(response) {
                debugger;
            }
        );

        $scope.selectedPolicies = [];
        $scope.minSupport = 0.001;
        $scope.minConfidence = 0.5;
        $scope.loading = false;
        $scope.corrSett = {
            enableSearch: true,
            showCheckAll: false,
            showUncheckAll: false,
            scrollable: true
        };


        $scope.submitRecomm = function () {
            $scope.loading = true;
            RecommendService.getAssocRule(
                {
                    "first": $scope.selectedPolicies,
                    "minSupport": $scope.minSupport,
                    "minConfidence": $scope.minConfidence
                }
            ).then(
                function success(response) {
                    $scope.assocRules = JSON.parse(response.data).associations;
                    debugger;
                },
                function error(response) {
                    debugger;
                }
            ).finally(
                function () {
                    $scope.loading = false;
                }
            );
        }

    }]);