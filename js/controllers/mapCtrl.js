app.controller('mapCtrl', function($scope, photoService) {

    $scope.callback = function(map) {
        // Map is available here to use:
        map.setView([40.734538, -73.991354], 15);
        // Credits Fsq for their data
        map.attributionControl
            .addAttribution('<a href="https://foursquare.com/">Places data from Foursquare</a>');

        photoService.getPhotoData().then(function(response) {
            var foursquarePlaces = L.layerGroup().addTo(map);
            var photoObjs = response.items;
            for (var i = 0; i < response.items.length; i++) {
                var venueId = photoObjs[i].venue.id;
                var venue = photoObjs[i].venue.name;
                var latlng = L.latLng(photoObjs[i].venue.location.lat, photoObjs[i].venue.location.lng);
                var marker = L.marker(latlng, {
                        icon: L.mapbox.marker.icon({
                            'marker-color': '#BE9A6B',
                            'marker-symbol': 'star',
                            'marker-size': 'large'
                        })
                    })
                    .bindPopup('<strong><a href="https://foursquare.com/v/' + venueId + '">' +
                        venue + '</a></strong>')
                    .addTo(foursquarePlaces);
            }
        });
    };

});
