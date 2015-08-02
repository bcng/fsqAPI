app.controller('photoCtrl', function($scope, photoService) {

    $scope.getPhotos = function() {
        photoService.getPhotoData().then(function(response) {
            $scope.photoData = response;
        })
    }

    $scope.getPhotos();

    $scope.getCountryData = function() {
        photoService.getPhotoData().then(function(response) {
            var countryArr = [],
                dupObj = {},
                newArr = [];
            var photoArr = response.items;
            console.log(photoArr);
            for (var i = 0; i < photoArr.length; i++) {
                countryArr.push(photoArr[i].venue.location.country);
            }
            for (var i = 0; i < countryArr.length; i++) {
                dupObj[countryArr[i]] = 0;
            }
            for (var keys in dupObj) {
                newArr.push(keys);
            }
            $scope.countryNumber = newArr.length;
        })
    }

    $scope.getCountryData();

    
});
