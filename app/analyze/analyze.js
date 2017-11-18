'use strict';

angular.module('myApp.analyze', [
    'ngRoute'
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/analyze', {
            templateUrl: 'analyze/analyze.html',
            controller: 'AnalyzeCtrl'
        });
    }])

    .controller('AnalyzeCtrl', ['$scope','AnalyzeService', function ($scope, AnalyzeService) {

        $scope.allFields = [];
        $scope.countPerc = false;
        AnalyzeService.getAllFields().then(
            function success(response) {
                $scope.allFields = JSON.parse(response.data);
            },
            function error(response) {
                debugger;
            }
        );

        /**********Correlation****************/
        $scope.corrfield1model = [];
        $scope.corrfield2model = [];
        $scope.corrLoading = false;
        $scope.corrSett = {
            enableSearch: true,
            scrollable:true
        };
        $scope.submitCorr = function () {
            $scope.corrLoading = true;
            AnalyzeService.submitCorr(
                {
                    "first": $scope.corrfield1model,
                    "second": $scope.corrfield2model
                }
            ).then(
                function success(response) {
                    debugger;
                    $scope.corrChart = JSON.parse(response.data).picture;
                },
                function error(response) {
                    debugger;
                }
            ).finally(function () {
                $scope.corrLoading = false;
            });
        };

        /************Count**************/
        $scope.countFieldModel = {};
        $scope.countLoading = false;
        $scope.countSett = {
            enableSearch: true,
            showCheckAll:false,
            showUncheckAll:false,
            scrollable:true,
            selectionLimit:1
        };
        $scope.submitCount = function () {
            $scope.countLoading = true;
            AnalyzeService.submitCount(
                {
                    "field" : $scope.countFieldModel
                }
            ).then(
                function success(response) {
                    debugger;
                    $scope.countChart = JSON.parse(response.data).picture;
                },
                function error(response) {
                    debugger;
                }
            ).finally(function () {
                $scope.countLoading = false;
            });
        };

        /************Distribution**************/
        $scope.distField1model = {};
        $scope.distField2model = {};
        $scope.distLoading = false;
        $scope.submitDist = function () {
            $scope.distLoading = true;
            AnalyzeService.submitDist(
                {
                    "first" : $scope.distField1model,
                    "second" : $scope.distField2model
                }
            ).then(
                function success(response) {
                    debugger;
                    $scope.distChart = JSON.parse(response.data).picture;
                },
                function error(response) {
                    debugger;
                }
            ).finally(function () {
                $scope.distLoading = false;
            });
        };
    }]);