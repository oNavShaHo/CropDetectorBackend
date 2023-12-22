const express = require('express');
const cors = require('cors');


const app = express();
const port = 3000;

const mainRouter = require('./Routers/mainRouter'); // Adjust the path as needed

app.use(cors());
app.use(express.json());

app.use('/', mainRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
