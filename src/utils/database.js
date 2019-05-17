const sequelize = require('sequelize')
const db = require('../../lib/database')()

const querySelect = () => async (query, replacements = {}) =>
  await db.query(query, {
    replacements,
    type: sequelize.QueryTypes.SELECT
  })

module.exports = {
  querySelect
}