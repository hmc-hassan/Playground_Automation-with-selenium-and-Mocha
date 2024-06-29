const { Select } = require('enquirer');
const Runner = require('mocha/lib/runner');

const originalRun = Runner.prototype.run;

Runner.prototype.run = function (done) {
  // Ensure there are tests available
  if (!this.suite || !this.suite.suites || this.suite.suites.length === 0) {
    console.error('No tests found in suite');
    return originalRun.call(this, done);
  }

  // Collect all tests from all suites
  let tests = [];
  this.suite.suites.forEach(suite => {
    if (suite.tests && suite.tests.length > 0) {
      tests = tests.concat(suite.tests);
    }
  });

  // Check if tests array is empty
  if (tests.length === 0) {
    console.error('No tests found in suites');
    return originalRun.call(this, done);
  }

  // Get titles of the tests for choices
  const testTitles = tests.map(t => t.title);

  // Create the Select prompt
  const prompt = new Select({
    name: 'run test',
    message: 'Which test should I run',
    choices: testTitles
  });

  // Run the prompt and handle the selected test
  prompt.run().then(answer => {
    if (!answer) {
      console.error('No test selected');
      return originalRun.call(this, done);
    }

    // Filter the suite tests based on the selected title
    this.suite.suites.forEach(suite => {
      suite.tests = suite.tests.filter(t => t.title === answer);
    });

    // Call the original run method with the filtered suite
    originalRun.call(this, done);
  }).catch(error => {
    console.error('Prompt error:', error);
    originalRun.call(this, done);
  });
};