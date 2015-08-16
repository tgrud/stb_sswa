angular.module("NoteWrangler").directive('nwCategorySelector', function(Category){
    return {
        replace: true,
        restrict: "E",
        templateUrl: "assets/templates/directives/nwCategorySelector.html",
        link: function(scope, element, attrs){
            var activeCateogry = {};
            scope.categories = Category.query();
            
            scope.isActive = function(category){
                return activeCateogry.id === category.id;
            }
            
            scope.toggleCategory = function(category){
                if(category === activeCateogry) {
                    activeCateogry = {};
                } else {
                    activeCateogry = category;   
                }
            }
            
        }
    };
});
