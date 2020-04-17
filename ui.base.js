var assert = require('assert');
const { Builder, By } = require("selenium-webdriver");
let driver;

describe('access', function() {
    before(function() {
        driver = createDriver();
        driver.get('http://tien.nguyen:Kms@1998@192.168.74.132:8081/EmailConfig');
    });

    after(function() {
        driver.quit();
    });

    it( 'Test Case', function(){
        driver.findElement(By.xpath('//*[@id="nav-home"]/div/div[1]/label[1]/nobr')).getText().then(function(title) {
            assert.equal(title, 'SMTP Server', "right page");
        });
    });
});

const createDriver = (browserName = 'chrome') => {
    return new Builder().forBrowser(browserName).build();
};