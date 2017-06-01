// spec.js
describe('Protractor Demo App1', function() {
  it('should greet the named user', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});