(function() {
	'use strict';

	angular
		.module('test')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($timeout, $scope) {
		$scope.showGrid = function(id){
			console.log("MainController",id);
		}
	}
})();
