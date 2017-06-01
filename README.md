# nodejs-saucelabs-example
It is a example of node.js e2e test with configuring Sauslabs  

### 1- Get username and accessKey

![screen shot 2017-05-25 at 7 08 37 pm](https://git.corp.yahoo.com/storage/user/23034/files/9fd4bfb0-417d-11e7-8753-adddfa308a76)

### 2- Run Node.js script

The script is written from : 
[https://wiki.saucelabs.com/display/DOCS/Node.js+Test+Setup+Example](https://wiki.saucelabs.com/display/DOCS/Node.js+Test+Setup+Example)

![script example](https://cdn-images-1.medium.com/max/1200/1*G7QUPS4AMz8Lf7fBu3fh4Q.png)


# E2E - Saucelabs - Selenium
![screen shot 2017-06-01 at 3 44 33 pm](https://cloud.githubusercontent.com/assets/5538753/26669669/521ea394-46e1-11e7-91ec-8297e75e18ce.png)


Run
```
$ node node_example.js
title is: I am a page title - Sauce Labs
```

## Casper VS Nightwatch VS Protrator
 They all support for different unit test frameworks like (Jasmine, Mocha, Cucumber etc..)
 They all support good reporting mechanism (html, xml etc..)

 - Casper: 6.6k ： 
 It is written in Python, i.e. it is not a native Node.js solution.
    - It uses  headless browser engines (PhantomJS or SlimerJS).
    - Tests run much faster compared to real browsers.
 
 - Nightwatch: 6.6k

    - It is a custom implementation of W3C webdriver API, like WebDriverIO.
    - Its benefits include highly transparent and readable test code.
    - It needs to use waits in code while Protractor and TestCafe have built-in waiting mechanism.
 
 - Protrator: 6.5k
  It is the only automation tool which has inbuilt support for AngularJS element 

     - It does not have support to automate mobile Apps.


#### Read More
 - [Nightwatch](https://github.com/dwyl/learn-nightwatch)
 - [Top 5 Most Rated Node.js Frameworks for End-to-End Web Testing](https://medium.com/@adrian_lewis/top-5-most-rated-node-js-frameworks-for-end-to-end-web-testing-f8ebca4e5d44)
 - [Protractor vs WebdriverIO vs NightWatch](http://www.webdriverjs.com/protractor-vs-webdriverio-vs-nightwatch/)

## Reference:
 - [https://wiki.saucelabs.com/display/DOCS/Node.js+Test+Setup+Example](https://wiki.saucelabs.com/display/DOCS/Node.js+Test+Setup+Example)
 - [https://medium.com/@mikaelberg/zero-to-hero-with-end-to-end-tests-using-nightwatch-saucelabs-and-travis-e932c8deb695](https://medium.com/@mikaelberg/zero-to-hero-with-end-to-end-tests-using-nightwatch-saucelabs-and-travis-e932c8deb695)
 - [https://www.infoq.com/articles/balancing-unit-and-end-to-end-tests](https://www.infoq.com/articles/balancing-unit-and-end-to-end-tests)
