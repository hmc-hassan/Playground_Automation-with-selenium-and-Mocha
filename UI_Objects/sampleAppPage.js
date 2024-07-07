const { By, until, Key  } = require('selenium-webdriver');

class sampleapp {
    constructor(driver) {
        this.driver = driver;
        this.Button = By.css("a[href='/sampleapp']");
        this.saText = By.css("div[class='container'] h3");
        this.user = By.xpath("//input[@name='UserName']") 
        this.pwd = By.xpath("//input[@name='Password']")
        this.login = By.xpath("//button[@id='login']")
        this.textmessage = By.xpath("//label[@id='loginstatus']")
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
    async Login(){
        const Loginbutton = await this.driver.findElement(this.login);
        await this.driver.wait(until.elementIsVisible(Loginbutton), 1000);
        await Loginbutton.click();
    }
    async Logintext(){
        const Logintext = await this.driver.findElement(this.textmessage);
        await this.driver.wait(until.elementIsVisible(Logintext), 1000);
        const color = await Logintext.getCssValue('color');
        return color;
    }

}

module.exports = sampleapp;