(function() {
	'use strict';

	angular
		.module('test')
		.run(runBlock);

	/** @ngInject */
	function runBlock($log, backendData) {
		// fetching sports tree structure 
		backendData.getTree().then(function(response){
			backendData.treeData = response.data;
		});

		// fetching odds layout 
		backendData.getOddsLayout().then(function(response){
			backendData.layotData = response.data;
		});

		$log.debug('runBlock end');
	}

})();
