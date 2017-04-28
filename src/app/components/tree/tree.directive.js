(function() {
  'use strict';

  angular
    .module('test')
    .directive('tree', tree);

  /** @ngInject */
  function tree(backendData) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/tree/tree.html',
      controller: TreeController,
      controllerAs: 'vm',
      link: linkFunc,
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function TreeController($scope, $rootScope) {
      $scope.tree = $rootScope.tree
      // $scope.showGrid = function(id){
      //   console.log(id);
      // }

    }

    function linkFunc(scope, el, attr, vm) {
      el.find('.disciplines').on('click', 'li', function(){
        console.log()
      })
    }
  }

})();
