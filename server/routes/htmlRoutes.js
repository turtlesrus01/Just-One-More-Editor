const path = require('path');

//Route to match requests to the root and serve the index file from distribution
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
