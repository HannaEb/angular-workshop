describe("counterController", function(){
  var ctrl;

  beforeEach(function(){
    module("counterApp")
    inject(function($controller){
      ctrl = $controller("counterController")
    });
  });

  it("starts at 0 count", function(){
    expect(ctrl.count).toEqual(0);
  });

  xit("can be incremented", function(){
    ctrl.increment();
    expect(ctrl.count).toEqual(1);
  })

  xit("can be decremented", function(){
    ctrl.decrement();
    expect(ctrl.count).toEqual(-1);
  })
});
