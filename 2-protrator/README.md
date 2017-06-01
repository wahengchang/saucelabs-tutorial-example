## protractor + saucslab

Executing sync javascript in Protractor 
```js
browser.executeScript('1+1')
```


Executing function
```js
function getAngularVersion() {
  return '2'
}
 
browser.executeScript(getAngularVersion)
    .then(function (version) {
    console.log(version);
    });
```

## Reference 
 - [From: github](https://github.com/saucelabs-sample-test-frameworks/JS-Protractor-Selenium/tree/master/specs)