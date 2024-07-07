const Home = require('../UI_Objects/homePage');
const ClassAttribute = require('../UI_Objects/classAttributePage');

async function navigateClassAttribute(driver){
    const vhome = new Home(driver);
    await vhome.clickClassAttribute();
    await new Promise(resolve => setTimeout(resolve, 100));
};
async function validateClassAttributetext(driver){
    const vdid = new ClassAttribute(driver);
    const titletext = await vdid.getcatitle();
    await new Promise(resolve => setTimeout(resolve, 100));
    return titletext
};
async function clickClassAttribute(driver){
    const caid = new ClassAttribute(driver);
    await caid.clickButton();
    await new Promise(resolve => setTimeout(resolve, 100));
};
module.exports = {
    navigateClassAttribute,
    clickClassAttribute,
    validateClassAttributetext
};