const { By, until  } = require('selenium-webdriver');

class DynamicID {
    constructor(driver) {
        this.driver = driver;
        this.DidText = By.xpath("//h3[normalize-space()='Dynamic ID']");
        this.btn_did = By.xpath("//button[@class = 'btn btn-primary']")
    }
    async getdidtitle() {
        return await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.DidText)), 100).getText();
      
    }
    async clickButton() {
        const btn = await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.btn_did)), 100);
        await btn.click();
    }
    async getAttribute(attributeName) {
        const btn = await this.driver.wait(until.elementLocated(this.btn_did), 100);
        return await btn.getAttribute(attributeName);
    }
}

module.exports = DynamicID;