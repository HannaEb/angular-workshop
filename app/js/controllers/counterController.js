counterApp.controller('CounterCtrl', ['CounterFactory', function(CounterFactory){
  var self = this;

  self.model = [new CounterFactory(), new CounterFactory()];
}]);
