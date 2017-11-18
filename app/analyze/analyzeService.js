angular.module('myApp.analyze')

    .service("AnalyzeService", ["$http", function ($http) {

            this.getAllFields = function (request) {
                return $http.get('/recommend/getComboValues/', request).then(function (response) {
                    return response;
                })
            };

            this.submitCorr = function (request) {
                return $http.post('/recommend/getCorMatrix/', request).then(function (response) {
                    return response;
                })
            };

            this.submitCount = function (request) {
                debugger;
                return $http.post('/recommend/getCountMatrix/', request).then(function (response) {
                    return response;
                })
            };

            this.submitDist = function (request) {
                debugger;
                return $http.post('/recommend/getDistMatrix/', request).then(function (response) {
                    return response;
                })
            }

        }]
    );