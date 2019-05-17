require('./resetenv')()
const path = require('path')

process.env.NODE_ENV === 'development'
  ? require('dotenv').config({ path: path.join(__dirname,'.env.development') })
  : require('dotenv').config({ path: path.join(__dirname,'.env.production') })

console.log('\n************ Environtment config ************')
console.log('  Environment:     ', process.env.NODE_ENV)
console.log('  UI Url:          ', process.env.UI_URL)
console.log('  API Url:         ', process.env.API_URL)
console.log('  Database Host:   ', process.env.DB_HOST)
console.log('  Database Schema: ', process.env.DB_SCHEMA)
console.log('  Database User:   ', process.env.DB_USER)
console.log('  Database Passwd: ', '********')
console.log('*********************************************\n')

module.exports = {
  port: 3000,
  uiorigin: process.env.UI_ORIGIN,
  database: {
    dialect: 'mssql',
    host: process.env.DB_HOST,
    schema: process.env.DB_SCHEMA,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: '1433',
    log: false
  },
  secret: process.env.SECRET
}


