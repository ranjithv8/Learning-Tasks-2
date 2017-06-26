describe('HeroDetailController', function() {
  var $componentController;

  beforeEach(module('heroApp'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should call save', function() {
    var onSaveSpy = jasmine.createSpy('saveDetails');
    var bindings = {hero: {}, onDelete: onSaveSpy};
    var ctrl = $componentController('heroDetails', null, bindings);

    ctrl.saveDetails();
    expect(onDeleteSpy).toHaveBeenCalled();
  });
});
