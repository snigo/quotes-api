exports.badRequest = (res, message) => res.status(400).json({
  error: `Bad request${message ? `: ${message}` : ''}.`,
  status: 400,
});
