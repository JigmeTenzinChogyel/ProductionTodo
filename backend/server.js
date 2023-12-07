const express = require('express')
const cors = require('cors')
const db = require('./models')
require('dotenv').config()
const routes = require('./routes')

const port = process.env.PORT || 8000

const app = express()

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

routes(app);

db.sequelize.sync().then((req) => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

