app.service('checkInService', function($http, $q) {

    this.getCheckInData = function() {
        var deferred = $q.defer();
        $http.get('https://api.foursquare.com/v2/users/self/venuehistory?oauth_token=PZCHCVVFF43VW3N25XQELTYOFJYVTFDK1OVD0CMQ15CXZKWT&v=20150801').then(function(response) {
            console.log(response)
            deferred.resolve(response)
        })
        return deferred.promise;
    }

});
