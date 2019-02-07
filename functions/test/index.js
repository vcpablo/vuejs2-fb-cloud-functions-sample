const fn = require('../calculate')
const mock = require('./mock')
const mochaLogger = require('mocha-logger');
const assert = require('assert');

describe('calculate', () => {
  for(let i in mock.input) {
    it(`should calculate it right #${i}`, () => {
      const input = mock.input[i]
      const output = mock.output[i]

      mochaLogger.log(`Test1 #${i}`);
      mochaLogger.log(`Input: Origin:  ${input.origin} | Destination : ${input.destination} | Minutes: ${input.minutes} | Plan: ${input.plan.title}`);
      
      const result = fn.calculate(input);

      mochaLogger.log(`Output:   With plan: ${result.data.withPlan} | Without plan: ${result.data.withoutPlan}`);
      assert.deepEqual(result, output);
    });
  }
});
