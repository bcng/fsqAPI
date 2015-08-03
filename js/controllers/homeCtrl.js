app.controller('homeCtrl', function($scope, homeService){
  
  // this function will call the homeService function and assign data to the scope
	$scope.getAllData = function() {
		homeService.getUserData().then(function(response){
			$scope.allData = response;
		})
	}

	$scope.getAllData();
});

