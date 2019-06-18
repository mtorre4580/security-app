const pool = require('../utils/db');

// Obs for SQL Injection https://github.com/mysqljs/mysql#escaping-query-values

/**
 * Get all participants
 * @throws Error
 * @returns {Promise<Array<Object>>}
 */
const getAll = async () => {
  try {
    return await pool.query('SELECT * FROM participants');
  } catch (err) {
    throw new Error('Se produjo un error al obtener los participantes de la carrera');
  }
};

/**
 * Save user
 * @param {Object} user
 * @throws Error
 * @returns void
 */
const save = async user => {
  try {
    await pool.query('INSERT INTO participants SET ?', user);
  } catch (err) {
    throw new Error('Se produjo un error al dar de alta al participante');
  }
};

module.exports = { getAll, save };