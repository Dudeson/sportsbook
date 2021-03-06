(function() {
	'use strict';

	angular
		.module('test')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($scope, backendData) {
		var vm = this;
		$scope.gridBuilded = false;
		$scope.types = backendData.layotData;

		$scope.showGrid = function(id){

			// fetching matches for selected league
			backendData.getMatches(id).then(function(response){
				$scope.matches = response.data;	
				var resultArray = {};
				var sortedHead = {};

				angular.forEach($scope.matches, function(match, key){
					resultArray[match.id] = match;
					resultArray[match.id].sortedOdds = resultArray[match.id].sortedOdds || {};
					angular.forEach($scope.types, function(type, key){

						angular.forEach(type.odds, function(odd, key){
							// combining oddType and odd priority;
							var priority = type.priority.toString() + odd.priority.toString(); 
							// store this priority as a keys in new arrays;
							sortedHead[priority] = odd;
							resultArray[match.id].sortedOdds[priority] = []; 

							angular.forEach(match.odds[type.index], function(item, key){
								if (item.name == odd.id ){ // matching odds in match with odds in layout
									resultArray[match.id].sortedOdds[priority] = item; 
								}
							})
						})
						
					})
				})

				$scope.sortedHead = sortedHead;
				$scope.matches = resultArray;
				$scope.gridBuilded = true;
				
			});
		}

	}
})();
