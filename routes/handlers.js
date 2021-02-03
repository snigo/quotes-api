exports.badRequest = (res, message) => res.status(400).json({
  error: `Bad request${message ? `: ${message}` : ''}.`,
  status: 400,
});

exports.notFound = (res, message) => res.status(404).json({
  error: `Nof found${message ? `: ${message}` : ''}.`,
  status: 404,
});
