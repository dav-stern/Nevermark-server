require('dotenv').config({ path : './.env.dev' });
const express = require ('express');
const app = express();
const cors = require ('cors');
const router = require ('./router');

const { APP_PORT } = process.env;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(APP_PORT,()=> console.log(`Server is running at port ${APP_PORT}`));