const Home = require('../POM/PO_Homepage');
const DynamicID = require('../POM/PO_DynamicID');

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
module.exports = {
    navigateDynamicID,
    validateDynamicIDtext
};