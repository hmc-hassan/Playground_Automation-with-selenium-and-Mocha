const { By, until  } = require('selenium-webdriver');

class ClassAttribute {
    constructor(driver) {
        this.driver = driver;
        this.caText = By.xpath("//h3[normalize-space()='Class Attribute']");
        this.btn_class = By.xpath("//button[contains(concat(' ', ' ', normalize-space(@class), ' '), ' btn-primary ')]");
    }
    async clickButton() {
        const cabtn = await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.btn_class)), 1000);
        await cabtn.click();
    }
    async getcatitle() {
        return await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.caText)), 100).getText();
    }
}

module.exports = ClassAttribute;