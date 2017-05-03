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
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function TreeController($scope, $rootScope) {
      $scope.tree = $rootScope.tree
    }

  }

})();
