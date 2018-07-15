var cred = [
    {"username":"anup", "password":"anup"}
]; 

var product = [
    {"prod_code":"0001", "prod_name":"Global Printed t-Shirt"},
    {"prod_code":"0002", "prod_name":"Global Printed Dresses"},
    {"prod_code":"0003", "prod_name":"Global Printed Jeans"},
    {"prod_code":"0004", "prod_name":"Global Embroidered Blouse"},
    {"prod_code":"0005", "prod_name":"Global Coat "},
    {"prod_code":"0006", "prod_name":"Global Tunic With Belt6"}
]; 

var app = angular.module('myApp', []);
app.controller('validateCtrl', function($scope) {

$scope.customer = cred;
$scope.check = true;
      console.log($scope.customer.length);
         $scope.validate = function() {
              for (i = 0; i < $scope.customer.length; i++) {  
                $scope.cust = $scope.customer[i]
                        if($scope.cust.username == $scope.username){  
                            alert("valid Username or Password");
                            $scope.check = false;
                        }
                        else{
                         alert("Invalid Username or Password");                              
                        }        
                }
        }
        $scope.names = product;
});