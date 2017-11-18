angular.module('myApp.recommend')
    .service("RecommendService", ["$http", function ($http) {

            this.getAllPolicies = function () {
                return $http.get('/recommend/getPolicyFields/').then(function (response) {
                    return response;
                })
            };

            this.getAssocRule = function (request) {
                return $http.post('/recommend/getAssociationRules/', request).then(function (response) {
                    return response;
                })
            }
        }]
    );