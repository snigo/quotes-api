const { Router } = require('express');
const { badRequest } = require('./handlers');
const {
  getAll,
  getPage,
  getRandom,
  quotesPerPage,
} = require('../model');

const own = process.env.OWN_URL?.replace(/\/$/, '');

const apiRouter = Router();
apiRouter.get('/quotes', (req, res) => {
  const page = parseInt(req.query.p || 1, 10);
  if (!page || page < 1) return badRequest(res, 'page number should be greater than 0');
  const result = getPage(page);
  return res.status(200).json({
    status: 200,
    page,
    result,
    next: result.length === quotesPerPage ? `${own}/api/quotes?p=${page + 1}` : null,
  });
});
apiRouter.get('/quotes/all', (_, res) => {
  const result = getAll();
  return res.status(200).json({
    status: 200,
    result,
  });
});
apiRouter.get('/quotes/random', (_, res) => {
  const result = getRandom();
  return res.status(200).json({
    status: 200,
    result,
  });
});

module.exports = apiRouter;
