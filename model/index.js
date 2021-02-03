const { random } = require('@snigo.dev/mathx');
const quotes = require('./quotes.json');

const QPP = 100;
const PCNT = Math.ceil(quotes.length / QPP);

exports.getAll = () => quotes;
exports.getPage = (page) => {
  const i = (page - 1) * QPP;
  return +page <= PCNT ? quotes.slice(i, i + QPP) : [];
};
exports.getRandom = () => quotes[random([0, quotes.length - 1], 0)];
exports.quotesPerPage = QPP;
