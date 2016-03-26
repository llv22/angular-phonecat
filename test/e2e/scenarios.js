/// <reference path="../../typings/main.d.ts" />
'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {

    // see : should be in the function(), otherwise, browser frame not's loaded
    describe('Phone list view', function() {
        beforeEach(function() {
            // see : option to maximize windows size
            // browser.driver.manage().window().maximize();
            browser.get('app/index.html');
            // console.log('load app/index html page for e2e protractor testing');
        });
       
        console.log('e2e scenario testing now');
        var phonelist = element.all(by.repeater('phone in phones')); 
        var query = element(by.model('query'));
    
        it('should filter the phone list as a user types into the search box', function() {
            console.log('e2e test case 1');
            expect(phonelist.count()).toBe(3);
            
            query.sendKeys('nexus');
            expect(phonelist.count()).toBe(1);
            
            query.clear();
            query.sendKeys('motorola');
            expect(phonelist.count()).toBe(2);
        });
        
        it('should display the current filter value in the title bar', function() {
            console.log('e2e test case 2');
            query.clear();
            expect(browser.getTitle()).toMatch(/Google Phone Gallery:\s*$/);
            
            query.sendKeys('nexus');
            expect(browser.getTitle()).toMatch(/Google Phone Gallery: nexus$/);
        });
    });

});
