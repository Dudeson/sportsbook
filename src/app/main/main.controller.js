(function() {
	'use strict';

	angular
		.module('test')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($timeout, $scope, $rootScope, $filter, backendData) {
		var vm = this;
		$scope.gridBuilded = false;

		$scope.showGrid = function(id){
			backendData.getMatches(id).then(function(response){
				$scope.matches = response.data;	
				$scope.types = $rootScope.oddsLayout;
				$scope.gridBuilded = true;
			});
		}

	}
})();
