const { By, until } = require('selenium-webdriver');

class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.HPText = By.css("#title");
        this.HomeButton  = By.xpath('//a[normalize-space()="Home"]')
        this.Didlink = By.xpath('//a[normalize-space()="Dynamic ID"]')
        this.calin = By.xpath("//a[normalize-space()='Class Attribute']")
    }
    async gettitle() {
        return await this.driver.findElement(this.HPText).getText();
    }
    async Home(){
        let HH = await this.driver.findElement(this.HomeButton);
        await this.driver.wait(until.elementIsVisible(HH), 10000);
        await HH.click();
    }
    async clickDynamicID() {
        let dyID = await this.driver.findElement(this.Didlink);
        await this.driver.wait(until.elementIsVisible(dyID), 10000);
        await dyID.click();
    }
    async clickDynamicID() {
        let dyID = await this.driver.findElement(this.Didlink);
        await this.driver.wait(until.elementIsVisible(dyID), 10000);
        await dyID.click();
    }
    async clickClassAttribute() {
        let caID = await this.driver.findElement(this.calin);
        await this.driver.wait(until.elementIsVisible(caID), 10000);
        await caID.click();
    }
}

module.exports = HomePage;
