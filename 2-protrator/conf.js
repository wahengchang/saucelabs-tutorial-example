// conf.js

var _sauceUser= process.env.SAUCE_USERNAME,
  _sauceKey= process.env.SAUCE_KEY;

exports.config = {
  sauceUser: _sauceUser,
  sauceKey: _sauceKey,

  seleniumAddress: "http://" + _sauceUser + ":" + _sauceKey +
              "@ondemand.saucelabs.com:80/wd/hub",
  specs: ['specs/*spec.js'],

  // restartBrowserBetweenTests: true,

  onPrepare: function(){
      var caps = browser.getCapabilities()
  },

  multiCapabilities: [{
    browserName: 'firefox',
    version: '32',
    platform: 'OS X 10.10',
    name: "firefox-tests",
    shardTestFiles: true,
    maxInstances: 25
  }, {
    browserName: 'chrome',
    version: '41',
    platform: 'Windows 7',
    name: "chrome-tests",
    shardTestFiles: true,
    maxInstances: 25
  }],

  onComplete: function() {

    var printSessionId = function(jobName){
      browser.getSession().then(function(session) {
        console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
      });
    }
    printSessionId("Insert Job Name Here");
  }
}
