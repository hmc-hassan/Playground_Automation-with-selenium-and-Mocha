const Home = require('../UI_Objects/homePage');
const DynamicID = require('../UI_Objects/dynamicIDPage');

async function navigateDynamicID(driver){
    const vhome = new Home(driver);
    await vhome.clickDynamicID();
    await new Promise(resolve => setTimeout(resolve, 100));
};

async function validateDynamicIDtext(driver){
    const vdid = new DynamicID(driver);
    const titletext = await vdid.getdidtitle();
    await new Promise(resolve => setTimeout(resolve, 100));
    return titletext
};
async function clickButtonDid(driver){
    const cdid = new DynamicID(driver);
    await cdid.clickButton
    const buttonId = await cdid.getAttribute('class');
    await new Promise(resolve => setTimeout(resolve, 100));
    return buttonId
};
module.exports = {
    navigateDynamicID,
    validateDynamicIDtext,
    clickButtonDid
};