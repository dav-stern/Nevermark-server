// require('dotenv').config()
const express = require ('express');
const app = express();
const cors = require ('cors');
const router = require ('./router');

const port = 3004;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, ()=> console.log(`Server is running at port ${port}`))
