angular.module('myApp.prediction')
    .service("PredictionService", ["$http", function ($http) {

            this.getCategories = function () {
                return $http.get('/api/core/l/').then(function (response) {
                    return response;
                })
            };

            this.submitPred = function (request) {
                return $http.post('/recommend/predictUser/', request).then(function (response) {
                    return response;
                })
            }
        }]
    );