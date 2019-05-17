const express = require('express')
const cors = require('cors')
const path = require('path')
const { uiorigin } = require('./config/env.config')
const coupons = require('./src/coupons/routes')
const auth = require('./src/authentication/routes')

const routerConfig = (app) => {
  const whitelist = [
    'http://localhost',
    'http://localhost:5000',
    uiorigin
  ]

  const corsOptions = {
    origin: whitelist,
    optionsSuccessStatus: 200,
  }

  app.use(cors(corsOptions))
  app.use(express.static(path.join(__dirname, 'public')))

  app.use('/api', coupons)
  app.use('/api', auth)

}

module.exports = routerConfig
