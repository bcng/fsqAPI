 app.directive('dirPhoto', function() {
      return {
        restrict: 'E',
        templateUrl: 'js/directives/dirPhoto.html',
        scope: {
          photo: '=',
        }
      }
    })
