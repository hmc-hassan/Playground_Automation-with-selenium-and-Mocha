// softAssert.js

const assert = require('assert');
const { allure } = require('allure-mocha/runtime'); // Import Allure runtime

function softAssert(condition, message) {
    try {
        assert(condition, message);
        allure.step(`Assertion passed: ${message}`);
        return true; // Return true indicating assertion passed
    } catch (error) {
        allure.step('Assertion failed', () => {
            console.error(`Assertion failed: ${message}`);
        });
        //allure.step(`Assertion failed: ${message}`);
        //allure.attachment('Error Stack Trace', error.stack, 'text/plain');
        return false; // Return false indicating assertion failed
    }
}

module.exports = softAssert;
