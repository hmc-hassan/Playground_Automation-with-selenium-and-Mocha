const sampleapp = require('../POM/PO_sampleapp');


async function navigatetosampleapp(driver){
        const Sampleapp = new sampleapp(driver);
        await Sampleapp.clickSampleApp();
        await new Promise(resolve => setTimeout(resolve, 100));
        //To get the Title of Sample app page for verification
        const savalue = await Sampleapp.getsatitle();
        return savalue
    };
async function Adduser(driver, username){
    const Sampleapp = new sampleapp(driver);
    await Sampleapp.Adduser(username);
}
async function Addpwd(driver, password){
    const Sampleapp = new sampleapp(driver);
    await Sampleapp.Addpwd(password);
}
module.exports = {
    navigatetosampleapp,
    Adduser,
    Addpwd
};

