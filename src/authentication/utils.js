const jwt = require('jsonwebtoken')
const { secret } = require('../../config/env.config')

const ALGORITHM = 'HS256'
const EXPIRATION = '24h'

/*
Params
  @user object
*/
const sign = user => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      user,
      secret,
      {
        algorithm: ALGORITHM,
        expiresIn: EXPIRATION
      },
      (error, token) => error ? reject(err) : resolve(token)
    )
  })
}


module.exports = {
  sign
}