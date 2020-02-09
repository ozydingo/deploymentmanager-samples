/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.handler = function(req, res) {
  const { message } = req.body;
  console.log(message);
  res.status(200).send(
      {hello: 'world', message, time: new Date(), codeHash: process.env.codeHash});
};
