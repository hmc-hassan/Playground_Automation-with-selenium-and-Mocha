const { By, until, Key  } = require('selenium-webdriver');

class sampleapp {
    constructor(driver) {
        this.driver = driver;
        this.Button = By.css("a[href='/sampleapp']");
        this.saText = By.css("div[class='container'] h3");
        this.user = By.xpath("/html[1]/body[1]/section[1]/div[1]/div[2]/div[1]/input[1]") 
        this.pwd = By.xpath("/html[1]/body[1]/section[1]/div[1]/div[3]/div[1]/input[1]")
    }
    async clickSampleApp() {
        await this.driver.findElement(this.Button).click();
    }
    async getsatitle() {
        return await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.saText)), 100).getText();
      
    }
    async Adduser(username){
        const userField = await this.driver.findElement(this.user);
        await this.driver.wait(until.elementIsVisible(userField), 1000);
        await userField.sendKeys(username);
    }
    async Addpwd(password){
        const pwdField = await this.driver.findElement(this.pwd);
        await this.driver.wait(until.elementIsVisible(pwdField), 1000);
        await pwdField.sendKeys(password);
    }
}

module.exports = sampleapp;