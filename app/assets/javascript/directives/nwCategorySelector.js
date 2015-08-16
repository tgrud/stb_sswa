angular.module("NoteWrangler").directive('nwCategorySelector', function(Category){
    return {
        replace: true,
        restrict: "E",
        require: "?ngModel",
        templateUrl: "assets/templates/directives/nwCategorySelector.html",
        link: function(scope, element, attrs, ngModelCtrl){
            var activeCateogry = {};
            scope.categories = Category.query();
            
            scope.isActive = function(category){
                return activeCateogry && activeCateogry.id === category.id;
            }
            
            scope.toggleCategory = function(category){
                if(category === activeCateogry) {
                    activeCateogry = {};
                } else {
                    activeCateogry = category;   
                }
                
                ngModelCtrl.$setViewValue(activeCateogry);
            }
            
            ngModelCtrl.$render = function () {
                activeCateogry = ngModelCtrl.$viewValue;
            }
            
        }
    };
});
