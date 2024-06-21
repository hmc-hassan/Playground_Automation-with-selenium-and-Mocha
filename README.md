This is a practice automation project where i have tried to implement the web automation using Selenium and Mocha along with Javascript. The target website to practice is http://www.uitestingplayground.com.

I have implemented below mentioned concepts
1. Page Object Model - POM
2. Navigations - Tried to seperate navigations for code reusability
3. Helper Functions - This is to maintain all the helper functions for code reusability
4. Environement Details - It includes all the different environments that could be used for running the scripts
5. Allure Reports - The test suite is integrated with allure reports

All these are maintained in seperate folders and my main test cases are placed in test folder where these functions/classes are called.

Main test case file includes below dynamic handling
1. Environment variables are added to handle different test environments. Default is set to Test
2. Environemnt variables are added to handle different web browsers. Default is set to Chrome
3. Dynamic Headless configurations are added for execution in CI/CD pipelines

Below is the sample command to run the scripts depending upon the dynamic handling part
$env:NODE_ENV="Test";$env:BROWSER="Firefox"; npm test -- --headless

Once this command is executed, it executes couple of test cases and prepare allure reports. The default generation and opening of allure reports is made part of package.json where "posttest1" config is added
which is incorrect. For auto reports generation and opening you guys can change it to "posttest"
