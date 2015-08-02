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



 // var previousElement;

 // //directives taken in two parameters, the name of the directive in camel case which is best, and the callback function...you are always returning an object with directives. you then set, via restrict, what kind of directive you will create, and then attach an html template.
 // app.directive('dirDisplay', function() {
 //     return {
 //         restrict: 'E',
 //         templateUrl: 'app/directives/displayTmpl.html',
 //         //link's property value is a function definition
 //         link: function(scope, element, attributes) {
 //             //in this function we are toggling the visibility of the elements on scope, updating the css for the currently selected element, and setting the user on scope; we have to include the scope.$apply line to let nagular know that we've made a change 
 //             scope.show = false;
 //             scope.show = !scope.show;
 //             scope.changeUser({
 //                 user: scope.user
 //             });
 //             element.css({
 //                 'color': 'gray'
 //             })
 //             if (previousElement) {
 //                 console.log(previousElement);
 //                 previousElement.css({
 //                     "color": "black"
 //                 })
 //             }
 //             previousElement = element;
 //             scope.$apply();
 //         })

 // },
 // scope: {
 //     user: "=",
 //     changeUser: "&"
 // }
 // }
 // })
