const { describe, it, before, after, mocha } = require('mocha');
const {By, Builder, until, Key} = require('selenium-webdriver');
const assert = require("assert");
const WebDriverFactory = require('../Helper Function/WebDriverConfig');
const { takeScreenshot } = require('../Helper Function/Takescreenshot');
const {navigatetosampleapp, Adduser, Addpwd} = require('../Navigations/NavigateSampleApp');
const navigatebackToHomepage = require('../Navigations/NavigateHome');
const { navigateDynamicID, validateDynamicIDtext } = require('../Navigations/NavigateDynamicID');



// Get dynamic Environments
const env = process.env.NODE_ENV || 'Test';
const config = require('../Environment Details/'+ env + '.js');
const { url, username, password } = config;

  describe('Home Page setup', function () {
    let driver;
    let headlessMode;
    let browser;
 
    before(async function () {
        headlessMode = process.argv.includes('--headless') || false;
        browser = process.env.BROWSER || 'chrome';
        try{
            driver = await WebDriverFactory.getDriver(browser,headlessMode);
        }catch (error) {
            console.error('Error initializing WebDriver:', error);
            throw error;
        } 
    });
    
    it('Validate that Home page is loaded Successfully', async function () {
        try{
            await driver.get(url);
            await takeScreenshot(driver, 'Homepage');
            const value = await navigatebackToHomepage(driver)
            assert.ok(value.includes(value))
        }
        catch (error) {
        console.error('Error initializing WebDriver:', error);
        throw error;
    }

    });
    it('Navigate to sample app, input credentials and move back to Home Page', async function () {
        try{
            const savalue = await navigatetosampleapp(driver);
            assert.equal("Sample App", savalue);
            await Adduser(driver, username);
            //await new Promise(resolve => setTimeout(resolve, 5000));
            await Addpwd(driver, password);
            await takeScreenshot(driver, 'Sample App');
            await navigatebackToHomepage(driver);
        }
        catch (error) {
            console.error('Error initializing WebDriver:', error);
            throw error;
        }
      });
    it('Navigate to Dynamic ID and move back to Home Page', async function () {
        try{
            await navigateDynamicID(driver);
            const did = await validateDynamicIDtext(driver);
            assert.equal("Dynamic ID", did);
            await navigatebackToHomepage(driver);
        }
        catch (error) {
            console.error('Error initializing WebDriver:', error);
            throw error;
        }
      });

    after(async () => await driver.quit());
    
  });
  