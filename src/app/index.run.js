(function() {
  'use strict';

  angular
    .module('test')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, backendData, $rootScope) {
  	// fetching sports tree structure 
  	backendData.getTree().then(function(response){
    	$rootScope.tree = response.data;
    });

    // fetching odds layout 
  	backendData.getOddsLayout().then(function(response){
    	$rootScope.oddsLayout = response.data;
    });

    $log.debug('runBlock end');
  }

})();
