app.controller('homeCtrl', function($scope, homeService){
  
	$scope.getAllData = function() {
		homeService.getUserData().then(function(response){
			$scope.allData = response;
		})
	}

	$scope.getAllData();
});

