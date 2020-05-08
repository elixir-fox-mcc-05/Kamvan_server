if (process.env.NODE_ENV === 'development') {
	require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const router = require('./routes/index.js');
const errHandler = require('./middlewares/errHandler.js');
const app = express();
const port = process.env.PORT || 3000;

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], {
		dialect: 'postgres',
		protocol: 'postgres'
	});
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, config);
}

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.use(errHandler);

app.listen(port, () => {
	console.log(`Listening to port ${port}`);
});
