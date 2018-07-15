objTaaftModule.config(['$routeProvider',
	function($routeProvider)
	{
		$routeProvider
		.when('/podetails/:item/:key',
		{
			templateUrl : "po_details.html",
			controller  : 'poDetailsController'
		})
        .otherwise(
        {
        	redirectTo: '/'
        });
    }
]);