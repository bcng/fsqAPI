var app = angular.module("fsqApp", ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: "templates/homeTmpl.html",
        controller: "homeCtrl"
    })

    .when('/photos', {
        templateUrl: "templates/photoTmpl.html",
        controller: "photoCtrl"
    })

    .otherwise({
        redirectTo: '/'
    });

});
