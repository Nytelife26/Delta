const { Pool } = require("pg");
const config = require("../config.json");

const pool = new Pool(config.data.pgsql);

module.exports = {
	query: (text, parameters) => pool.query(text, parameters)
}
