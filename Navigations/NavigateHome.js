const Home = require('../POM/PO_Homepage');

async function navigateHome(driver){
    const vhome = new Home(driver);
    await vhome.Home();
    await new Promise(resolve => setTimeout(resolve, 100));
    const value = await vhome.gettitle();
    return value;
};
module.exports = navigateHome;