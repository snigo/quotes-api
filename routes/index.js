const { Router } = require('express');
const { badRequest, notFound } = require('./handlers');
const {
  getAll,
  getByPage,
  getById,
  getRandom,
  quotesPerPage,
} = require('../model');

const own = (process.env.OWN_URL || '').replace(/\/$/, '');

const apiRouter = Router();
apiRouter.get('/quotes', (req, res) => {
  const page = parseInt(req.query.p || 1, 10);
  if (!page || page < 1) return badRequest(res, 'page number should be greater than 0');
  const result = getByPage(page);
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
apiRouter.get('/quotes/:id', (req, res) => {
  const { id } = req.params;
  const result = getById(id);
  if (!result) return notFound(res, `message with id ${id} does not exist`);
  return res.status(200).json({
    status: 200,
    result,
  });
});

module.exports = apiRouter;
