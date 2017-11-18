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
        $scope.corrSett = {
            enableSearch: true,
            showCheckAll:false,
            showUncheckAll:false,
            scrollable:true
        };
        $scope.submitCorr = function () {
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
            );
        };

        /************Count**************/
        $scope.countFieldModel = {};
        $scope.countSett = {
            enableSearch: true,
            showCheckAll:false,
            showUncheckAll:false,
            scrollable:true,
            selectionLimit:1
        };
        $scope.submitCount = function () {
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
            );
        };

        /************Distribution**************/
        $scope.distField1model = {};
        $scope.distField2model = {};
        $scope.submitDist = function () {
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
            );
        };
    }]);