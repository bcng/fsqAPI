app.service('photoService', function($http, $q) {

    // this http request will retrieve photoData from the fsq endpoint
    this.getPhotoData = function() {
        var deferred = $q.defer();
        $http.get('https://api.foursquare.com/v2/users/self/photos?oauth_token=PZCHCVVFF43VW3N25XQELTYOFJYVTFDK1OVD0CMQ15CXZKWT&v=20150801').then(function(response) {
            var parsedResponse = response.data.response.photos;
            deferred.resolve(parsedResponse)
        })
        return deferred.promise;
    }


});
