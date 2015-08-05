app.controller('photoCtrl', function($scope, photoService) {

// this first part of the below function will retrieve photoData
    $scope.getPhotos = function() {
        photoService.getPhotoData().then(function(response) {
            $scope.photoData = response;
            
            //this part of the function will parse the photoData data and calculate number of unique countries user has taken pictures in
            var countryArr = [],
                dupObj = {},
                newArr = [];
            var photoArr = response.items;
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

    $scope.getPhotos();
    
});
