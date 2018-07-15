var objTaaftModule = angular.module('taaftApp', ['ngRoute']);
objTaaftModule.$inject = ['$scope', '$filter'];
objTaaftModule.controller('loginController', function($scope, $routeParam)
		{
	$scope.userName = "";
	$scope.password = "";
	$scope.failed = false;
	$scope.loginValidate = function(){
		if($scope.userName == "anup" && $scope.password == "patra"){
			window.location.href="product_search_page.html"
		}
		else{
			alert("Enter username: anup and password: patra");
			//$scope.failed = true;
		}
	};	

	$scope.modalDisable = function(){
		$scope.failed = false;
	}

});
objTaaftModule.controller('homeScreenController', function($scope, $routeParam)
	{	
	$scope.availableItemList = [{
		itemId: 123,
		itemName: "ABC",
		itemPrice: 20,
		qtyAvailable: 10
	},
	{
		itemId: 234,
		itemName: "BCD",
		itemPrice: 20,
		qtyAvailable: 10
	},
	{
		itemId: 345,
		itemName: "CDE",
		itemPrice: 20,
		qtyAvailable: 10
	},
	{
		itemId: 456,
		itemName: "DEF",
		itemPrice: 20,
		qtyAvailable: 10
	},
	{
		itemId: 567,
		itemName: "EFG",
		itemPrice: 20,
		qtyAvailable: 10
	},
	{
		itemId: 678,
		itemName: "FGH",
		itemPrice: 20,
		qtyAvailable: 10
	},
	{
		itemId: 789,
		itemName: "GHI",
		itemPrice: 20,
		qtyAvailable: 10
	},
	{
		itemId: 890,
		itemName: "HIJ",
		itemPrice: 20,
		qtyAvailable: 10
	}];
	$scope.searchItem = "";
	/*$rootScope.linkedItemType = "";
	$rootScope.linkedItemKey = "";
	$scope.displayClickedItem = function(x,y){
		$rootScope.linkedItemType = x;
		$rootScope.linkedItemKey = y;
	window.location.href="po_details.html";
	};*/

});

objTaaftModule.controller('poDetailsController', function($scope, $routeParam)
		{
	$scope.availableItemList = [{
		itemId: 123,
		itemName: "ABC",
		itemPrice: 20,
		qtyAvailable: 10
	},
	{
		itemId: 234,
		itemName: "BCD",
		itemPrice: 20,
		qtyAvailable: 10
	},
	{
		itemId: 345,
		itemName: "CDE",
		itemPrice: 20,
		qtyAvailable: 10
	},
	{
		itemId: 456,
		itemName: "DEF",
		itemPrice: 20,
		qtyAvailable: 10
	},
	{
		itemId: 567,
		itemName: "EFG",
		itemPrice: 20,
		qtyAvailable: 10
	},
	{
		itemId: 678,
		itemName: "FGH",
		itemPrice: 20,
		qtyAvailable: 10
	},
	{
		itemId: 789,
		itemName: "GHI",
		itemPrice: 20,
		qtyAvailable: 10
	},
	{
		itemId: 890,
		itemName: "HIJ",
		itemPrice: 20,
		qtyAvailable: 10
	}];
	$scope.linkedItem = [];
	/*for(var x=0;x<$scope.availableItemList.length;x++){
		if($rootScope.linkedItemType==="ItemId" && $scope.availableItemList[x].itemId===$rootScope.linkedItemKey){
		$scope.linkedItem.push($scope.availableItemList[x]);
		break;
		}
		if($rootScope.linkedItemType==="ItemId" && $scope.availableItemList[x].itemId===$rootScope.linkedItemKey){
		$scope.linkedItem.push($scope.availableItemList[x]);
		break;
		}
	};*/
	$scope.linkedItemType = $routeParam.type;
	$scope.linkedItemKey = $routeParam.key;
	for(var x=0;x<$scope.availableItemList.length;x++){
		if($scope.linkedItemType==="ItemId" && $scope.availableItemList[x].itemId===scope.linkedItemKey){
		$scope.linkedItem.push($scope.availableItemList[x]);
		break;
		}
		if($scope.linkedItemType==="ItemId" && $scope.availableItemList[x].itemId===scope.linkedItemKey){
		$scope.linkedItem.push($scope.availableItemList[x]);
		break;
		}
	}
});
