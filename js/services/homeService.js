app.service('homeService', function($http, $q) {

    this.getUserData = function() {
        var deferred = $q.defer();
        $http.get('https://api.foursquare.com/v2/users/self?oauth_token=PZCHCVVFF43VW3N25XQELTYOFJYVTFDK1OVD0CMQ15CXZKWT&v=20150801').then(function(response) {
            deferred.resolve(response.data.response.user)
        })
        return deferred.promise;
    }
});




