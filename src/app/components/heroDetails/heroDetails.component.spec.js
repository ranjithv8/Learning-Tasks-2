describe('HeroDetailController', function() {
  var $componentController;

  beforeEach(module('heroApp'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should call save', function() {
    var onSaveSpy = jasmine.createSpy('saveDetails');
    var bindings = {hero: {}, saveDetails: onSaveSpy};
    var ctrl = $componentController('herodetails', null, bindings);

    ctrl.saveDetails();
    expect(onSaveSpy).toHaveBeenCalled();
  });
});
