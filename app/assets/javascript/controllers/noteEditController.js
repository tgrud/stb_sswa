angular.module('NoteWrangler').controller('NotesEditController', function(Note, $scope, $routeParams){
    $scope.note = Note.get({id: $routeParams.id});
    $scope.isSubmitting = false;
    
    $scope.saveNote = function(note) {
        $scope.isSubmitting = true;
        
        note.$update().finally(function(){
            $scope.isSubmitting = false;
        });
    }
});
