const Sequelize = require('sequelize')
const config = require ('../config/env.config')

const { database } = config
let conn = null

module.exports = function dbinstance() {
    if(!conn){
      conn = new Sequelize(
          database.schema,
          database.user,
          database.password,
          {
              host: database.host,
              dialect: database.dialect,
              port: database.port,
              query: {
                  raw: false
              },
              logging: database.log
          }
        )
    }
    return conn
}
