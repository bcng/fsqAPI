app.directive('mapbox', [
    function() {
        return {
            restrict: 'EA',
            template: '<div></div>',
            scope: {
                callback: "="
            },
            link: function(scope, element, attributes) {
                L.mapbox.accessToken = 'pk.eyJ1IjoiYmNuMjIwIiwiYSI6IjY1MWRjYThmNDYxM2FhYjNjNDg0ZDgxYzkzNjE1ZjVjIn0.x1n_cAV0walgCUJo9INGMg';
                var map = L.mapbox.map(element[0], 'examples.map-i86nkdio');
                scope.callback(map);
            }
        };
    }
]);
