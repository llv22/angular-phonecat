/**
 * 1, protractor e2e scenario, see configuration tuturial - https://angular.github.io/protractor/#/plugins
 * 2, chrome configuration, see https://github.com/angular/protractor/blob/master/docs/browser-setup.md
 * 3, chrome can't be lanuch and Timeout issuee, see solution in https://github.com/angular/angular-phonecat/issues/276
 * issue logging : 
 *  [launcher] Running 1 instances of WebDriver
 *  [launcher] Process exited with error code 1
 *  /Users/llv22/Documents/orlando_innovation/swift/angular-phonecat/node_modules/selenium-webdriver/lib/goog/async/nexttick.js:41
 *  goog.global.setTimeout(function() { throw exception; }, 0);
 *  setting as follow:
 *      //   chromeOnly: true,
 *      directConnect: true,
 */
exports.config = {
  allScriptsTimeout: 11000,
  troubleshoot: true,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
    ,'chromeOptions': {
         'args': ['show-fps-counter=true']
     }
  },

//   chromeOnly: true,
  directConnect: true,

  baseUrl: 'http://localhost:8000/',

  /**
   * http://stackoverflow.com/questions/29497906/failed-error-while-waiting-for-protractor-to-sync-with-the-page-angular-could
   * information - https://github.com/angular/protractor/issues/1978
   * issue as follow :
   * Failures:
   * 1) PhoneCat App should filter the phone list as a user types into the search boox
   * Message:
   *    Error while waiting for Protractor to sync with the page: "angular could not be found on the window"
   * Stacktrace:
   *    undefined
   * change jasmine -> jasmine2
   * */
  framework: 'jasmine2',
  
//   onPrepare: function() {
//     browser.driver.manage().window().maximize();
//     browser.get('app/index.html');
//   },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    isVerbose: true
  }
};
