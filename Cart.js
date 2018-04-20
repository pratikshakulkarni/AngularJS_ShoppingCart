var app = angular.module("Shopping",[]);
app.controller('CartForm',function($scope) {
    $scope.cart = {
        items: [{name:'', quantity:'', cost:''}]
    }
    $scope.addItem = function() {
        $scope.cart.items.push({name:'', quantity:'', cost:''});
    }
    $scope.removeItem = function(index) {
        $scope.cart.items.splice(index,1);
    }
    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.cart.item, function(item) {
            total += item.quantity*item.cost;
        })
        return total;
    }
});