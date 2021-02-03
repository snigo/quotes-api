const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const apiRouter = require('./routes');
const logger = require('./logger');

const { PORT } = process.env;

const app = express();

app.use(helmet());
app.use(cors());
app.use('/api', apiRouter);

app.listen(PORT, () => {
  logger.info(`Server is up and running on port ${PORT}`);
});
