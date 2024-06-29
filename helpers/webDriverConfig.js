const { Builder } = require('selenium-webdriver');
const { Options: ChromeOptions } = require('selenium-webdriver/chrome');
const { Options: FirefoxOptions } = require('selenium-webdriver/firefox');

class WebDriverFactory {
    static async getDriver(browser = 'chrome', headless = false) {
        let options;

        switch (browser.toLowerCase()) {
            case 'chrome':
                options = new ChromeOptions();
                if (headless) {
                    options.addArguments('--headless');
                }
                break;
            case 'firefox':
                options = new FirefoxOptions();
                if (headless) {
                    options.headless();
                }
                break;
            default:
                throw new Error(`Unsupported browser: ${browser}`);
        }

        const driver = await new Builder()
            .forBrowser(browser.toLowerCase())
            .setChromeOptions(options)
            .setFirefoxOptions(options)
            .build();

        if (!headless) {
            await driver.manage().window().maximize();
        }

        return driver;
    }
}

module.exports = WebDriverFactory;
