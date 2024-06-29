const { By, until  } = require('selenium-webdriver');

class DynamicID {
    constructor(driver) {
        this.driver = driver;
        this.DidText = By.xpath("//h3[normalize-space()='Dynamic ID']");
    }
    async getdidtitle() {
        return await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.DidText)), 100).getText();
      
    }
}

module.exports = DynamicID;