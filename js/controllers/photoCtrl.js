app.controller('photoCtrl', function($scope, photoService){

	$scope.getPhotos = function() {
		photoService.getPhotoData().then(function(response){
			$scope.photoData = response;
			console.log(response.items);
		})
	}

	$scope.getPhotos();

});
