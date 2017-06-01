// spec.js
describe('Protractor Demo App1', function() {
    beforeEach(function() {
        return browser.ignoreSynchronization = true;
    });

  it('should greet the named user', function() {
    browser.get('https://saucelabs-sample-test-frameworks.github.io/training-test-page/');
    expect(browser.getTitle()).toEqual('I am a page title - Sauce Labs');
  });
});