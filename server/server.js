const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

//Static files are made available in the dist folder
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//imports the HTML route
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
