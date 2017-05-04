(function() {
	'use strict';

	angular
		.module('test')
		.directive('tree', tree);

	/** @ngInject */
	function tree(backendData) {
		var directive = {
			restrict: 'E',
			scope: {
				loadGrid: '&'
			},
			templateUrl: 'app/components/tree/tree.html',
			controller: TreeController,
			controllerAs: 'vm',
			link: linkFunc
		};
		return directive;

		/** @ngInject */
		function TreeController($scope, $rootScope) {
			$scope.tree = backendData.treeData;
		}

		function linkFunc(scope, element, attrs){
			element.on('click', '.league', function(e){
				element.find(".league.active").removeClass("active");
				$(this).addClass("active");
				var leagueId = $(this).data("league");
				scope.loadGrid({id:leagueId});
			})
		}


	}

})();
