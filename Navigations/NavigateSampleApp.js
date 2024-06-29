const sampleapp = require('../pageObjects/sampleAppPage');

let sampleAppInstance;

async function getSampleAppInstance(driver) {
    if (!sampleAppInstance) {
        sampleAppInstance = new sampleapp(driver);
    }
    return sampleAppInstance;
}

async function navigatetosampleapp(driver){
        const Sampleapp = await getSampleAppInstance(driver);
        await Sampleapp.clickSampleApp();
        await new Promise(resolve => setTimeout(resolve, 100));
        //To get the Title of Sample app page for verification
        const savalue = await Sampleapp.getsatitle();
        return savalue
    };
async function Adduser(driver, username){
    const Sampleapp = await getSampleAppInstance(driver);
    await Sampleapp.Adduser(username);
}
async function Addpwd(driver, password){
    const Sampleapp = await getSampleAppInstance(driver);
    await Sampleapp.Addpwd(password);
}
async function Login(driver){
    const Sampleapp = await getSampleAppInstance(driver);
    await Sampleapp.Login();
}
async function ValidateLogin(driver){
    const Sampleapp = await getSampleAppInstance(driver);
    return await Sampleapp.Logintext();
}

module.exports = {
    navigatetosampleapp,
    Adduser,
    Addpwd,
    Login,
    ValidateLogin
};

