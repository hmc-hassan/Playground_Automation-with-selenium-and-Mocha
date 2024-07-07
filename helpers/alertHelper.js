async function handleAlert(driver) {
    try {
        let alert = await driver.switchTo().alert();
        await alert.accept();
        console.log("Alert handled successfully");
        return true; // Indicate successful handling
    } catch (error) {
        console.error('Error handling alert:', error);
        return false; // Indicate failure
    }
}

module.exports = {
    handleAlert
};
