/// <reference path="../../typings/main.d.ts" />
'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {

    describe('Phone list view', function() {
        beforeEach(function() {
            browser.driver.manage().window().maximize();
            browser.get('http://localhost:8000/app/index.html');
        });
    });
    
    it('should filter the phone list as a user types into the search box', function() {
       var phonelist = element.all(by.repeater('phone in phones'));
       var query = element(by.model('query'));
       expect(phonelist.count()).toBe(3);
       
       query.sendKeys('nexus');
       expect(phonelist.count()).toBe(1);
       
       query.clear();
       query.sendKeys('motorola');
       expect(phonelist.count()).toBe(2);
    });

});
