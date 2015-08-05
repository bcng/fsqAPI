var app = angular.module("fsqApp", ['ngRoute', 'ui.bootstrap']);

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

    .when('/maps', {
        templateUrl: "templates/mapTmpl.html",
        controller: "mapCtrl"
    })

    .otherwise({
        redirectTo: '/'
    });

});
