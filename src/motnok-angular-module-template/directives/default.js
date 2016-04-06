angular.module('motnok-angular-module-template', ['motnok-angular-module-template-templates'])
.directive('defaultDirective', function(){
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'motnok-angular-module-template/templates/default.tpl.html',
        controller: ['$scope', function($scope){
            $scope.to = 'world';
        }]
    };
});