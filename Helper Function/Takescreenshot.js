const fs = require('fs');
const { allure } = require("allure-mocha/runtime");

const takeScreenshot = async (driver, screenshotName,) => {
    try {
        const screenshot = await driver.takeScreenshot();
        //fs.writeFileSync(`./allure-results/${screenshotName}.png`, screenshot, 'base64');
        
        if (allure) {
            allure.attachment(`${screenshotName} Screenshot`, Buffer.from(screenshot, 'base64'), 'image/png');
        } else {
            console.error('Allure object is not defined.');
            //console.log('Allure object:', allure);
        }
    } catch (error) {
        console.error('Error capturing screenshot:', error);
    }
};

module.exports = {
    takeScreenshot
};
