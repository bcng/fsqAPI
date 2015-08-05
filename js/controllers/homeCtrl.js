app.controller('homeCtrl', function($scope, homeService, photoService) {

    // this function will call the homeService function and assign data to the scope
    $scope.getAllData = function() {
        homeService.getUserData().then(function(response) {
            $scope.allData = response;
        })
    }

    $scope.getAllData();

    $scope.getPhotos = function() {
        photoService.getPhotoData().then(function(response) {
            $scope.photoData = response;
        })
    }

    $scope.getPhotos();

});
