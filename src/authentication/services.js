const query = require('../utils/database').querySelect()

/*
Params
  @user string
*/
const findUser = async user => {
  const [ result ] = await query(`
    select *
    from centroUnido_tblUsuarios
    where usuario = :user
  `, { user })
  return result
}

module.exports = {
  findUser
}
