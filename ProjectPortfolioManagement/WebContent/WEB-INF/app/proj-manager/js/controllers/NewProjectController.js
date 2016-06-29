angular.module("projApp").controller("NewProjectCtrl",["$scope","$uibModal","ProjectService",function($scope,$uibModal,projService){
	$scope.proj = {};
	
	/*$scope.add = function(){
		console.log("add called");
		projService.addProject($scope.proj).then(
				function(response){
					var data = response.data;
					var msg = data.name+" added successfully with id as "+data.id;
					$scope.addAlert("success",msg);
					$scope.dismissConfirm();
					$scope.proj={};
				},
				function(error){
					$scope.addAlert("danger","Some error occured on server side");
					$scope.dismissConfirm();
				}
		)
	};*/
	
	
}]);