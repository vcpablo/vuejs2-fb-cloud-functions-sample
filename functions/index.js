const functions = require('firebase-functions');
const calculate = require('./calculate')
const cors = require('cors')();

exports.calculate = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const output = calculate.calculate(request.body.data)
    response.send(output);
  });
});
