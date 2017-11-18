angular.module('myApp.recommend')
    .service("RecommendService", ["$http", function ($http) {

        this.getUserList = function () {
            return $http.get('/api/core/user/').then(function (response) {
                return response;
            })
        }
    }]
);