'use strict';

describe('Service: textPrompts', function () {

  // load the service's module
  beforeEach(module('rapBattlesApp'));

  // instantiate service
  var textPrompts;
  beforeEach(inject(function (_textPrompts_) {
    textPrompts = _textPrompts_;
  }));

  it('should do something', function () {
    expect(!!textPrompts).toBe(true);
  });

});
