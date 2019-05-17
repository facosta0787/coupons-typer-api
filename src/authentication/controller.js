const { findUser } = require('./services')
const token = require('./utils')

const doLogin = async (req ,res) => {
  const { user, password } = req.body

  if(!user) {
    return res.status(400).json({
      status: 400,
      message: 'Error - Solicitud incorrecta',
      data: 'Falta el nombre de usuario'
    })
  }

  try {
    const User = await findUser(user)

    if(User && User.password === password) {
      delete User.password
      const jwt = await token.sign(User)

      return res.status(200).json({
          status: 200,
          message: 'Ok',
          data: {
            user: {
              id: User.id,
              nuip: User.documento,
              name: User.nombre,
              user: User.usuario
            },
            token: jwt
          }
        })
    }

    throw new Error('Desautorizado para iniciar sesión')

  } catch(error) {
    return res.status(401).json({
      status: 401,
      message: 'Desautorizado',
      data: error.message
    })
  }
}

const verify = async (req, res) => {
  console.log(req.header('Authorization'))
  return res.json({ message: 'Ok' })
}

module.exports = {
  doLogin
}