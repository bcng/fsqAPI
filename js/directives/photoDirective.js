 app.directive('dirPhoto', function() {
     return {
         restrict: 'E',
         templateUrl: 'js/directives/dirPhoto.html',
         scope: {
             photo: '=',
         },
         link: function(scope, element, attributes) {
             element.on('mouseenter', function() {
                 element.css({
                     'opacity': '0.3'
                 }).on('mouseleave', function(){
                 	element.css({
                 		'opacity': '1.0'
                 	})
                 })
             })
         }
     }
 })


