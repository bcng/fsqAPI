var app = angular.module("fsqApp", ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: "templates/homeTmpl.html",
        controller: "homeCtrl"
    })

    .when('/categories', {
        templateUrl: "templates/detailsTmpl.html",
        controller: "detailsCtrl"
    })

    .otherwise({
        redirectTo: '/'
    });

});
