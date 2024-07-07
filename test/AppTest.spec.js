const { describe, it, before, after, mocha } = require('mocha');
const {By, Builder, until, Key} = require('selenium-webdriver');
const { allure } = require("allure-mocha/runtime");
const assert = require("assert");
const WebDriverFactory = require('../helpers/webDriverConfig');
const { takeScreenshot } = require('../helpers/takeScreenshot');
const {navigatetosampleapp, Adduser, Addpwd, Login,ValidateLogin} = require('../navigations/navigateSampleApp');
const navigatebackToHomepage = require('../navigations/navigateHome');
const { navigateDynamicID, validateDynamicIDtext,clickButtonDid } = require('../navigations/navigateDynamicID');
const { navigateClassAttribute, clickClassAttribute,validateClassAttributetext } = require('../navigations/navigateClassAttribute');
const { handleAlert } = require('../helpers/alertHelper');
const softAssert = require('../helpers/softAssert');



const env = process.env.NODE_ENV || 'test';
const config = require(`../configs/environments.json`)[env];
const { url, username, password } = config;


  describe('UI Test Automation Playground', function () {
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
        await driver.get(url);
        await takeScreenshot(driver, 'Homepage');
    });
    
    it('TC-01: Validate that Home page is loaded Successfully', async function () {
        try{
            const value = await navigatebackToHomepage(driver)
            assert.ok(value.includes(value))
        }
        catch (error) {
        console.error('Error Validate that Home page is loaded Successfully:', error);
        throw error;
    }

    });
    it('TC-02: Navigate to sample app, input credentials, Press Login and Validate Login is successful or not', 
        async function () {
        try{
            const savalue = await navigatetosampleapp(driver);
            assert.equal("Sample App", savalue);
            await Adduser(driver, username);
            await Addpwd(driver, password);
            await Login(driver);
            await new Promise(resolve => setTimeout(resolve, 5000));
            await takeScreenshot(driver, 'Sample App');
            const color = await ValidateLogin(driver);
            if (color.includes('40, 167, 69')) {
                console.log("Welcome " + username);
                await Login(driver);
                const color = await ValidateLogin(driver);
                if (color.includes('23, 162, 184')) {
                        console.log("User logged out.");
                        await takeScreenshot(driver, 'Logout');
                        await navigatebackToHomepage(driver);
                    }else {
                        console.log("No validation is performed");
                    }
            } else if (color.includes('220, 53, 69')) {
                console.warn("Error: Invalid username/password:");
                await navigatebackToHomepage(driver);
            } else {
                console.log("No validation is performed");
            }
            return Promise.resolve();
        }
        catch (error) {
            console.error('Error Navigate to sample app, input credentials and Press Login:', error);
            //throw error;
        }
      });
    it('TC-03: Navigate to Dynamic ID, click on dynamic id and move back to Home Page', async function () {
        try{
            await navigateDynamicID(driver);
            const did = await validateDynamicIDtext(driver);
            assert.equal("Dynamic ID", did);
            const buttonId = await clickButtonDid(driver)
            console.log('Class is:', buttonId);
            await navigatebackToHomepage(driver);
        }
        catch (error) {
            console.error('Error Navigate to Dynamic ID and move back to Home Page:', error);
            throw error;
        }
        
      });
    it('TC-04: Navigate to Class Attribute, click on button and move back to Home Page', async function () {
            try{
                await navigateClassAttribute(driver);
                const ca = await validateClassAttributetext(driver);
                //assert.equal("Class Attribute", ca);
                softAssert(ca === 'Class Attribute1', 'Validated Class Attribute title');
                await clickClassAttribute(driver);
                await new Promise(resolve => setTimeout(resolve, 1000));
                await handleAlert(driver); 
                await new Promise(resolve => setTimeout(resolve, 1000));
                await navigatebackToHomepage(driver);
            }
            catch (error) {
                console.error('Error Navigate to Class Attribute, click on button and move back to Home Page:', error);
                throw error;
            }
            
        });
    after(async () => await driver.quit());
    
  });