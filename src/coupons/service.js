const query = require('../utils/database').querySelect()

const findAll = async () => {
  return await query(`
      select top 500 *
        from centroUnido_tblCupones
       order by id`
    )
}

const findById = async id => {
  const [ coupon ] = await query(`
      select *
      from centroUnido_tblCupones
      where id = :id`
      ,{ id: id }
    )
  return coupon
}

const findByCurrentDay = async user => {
  const coupons = await query(`
    select *
      from centroUnido_tblUsuariosGestion
     where usuario = :user
       and cast(accionFecha as date) = cast(getdate() as date)
  `, { user })
  return coupons
}

const findByNuipOrEmail = async (nuip, email) => {
  const [ coupon ] = await query(`
      select top 1 *
        from centroUnido_tblCupones
       where numeroDocumento = :nuip
    `,{ nuip, email })
  return coupon && {
    id: coupon.id,
    nuip: coupon.numeroDocumento,
    name: coupon.nombre,
    tel: coupon.telefono,
    email: coupon.email,
    shopPlace: coupon.puntoCompra,
    createdAt: coupon.fechaCrea,
    updatedAt: coupon.fechaModifica,
  }
}

const insert = async coupon => {
  try {
    const result = await query(`
        exec usp_cupones_createOrUpdate
        :nuip,
        :name,
        :tel,
        :email,
        :shopPlace,
        :createdBy
      `,{ ...coupon }
      )

    const [ Coupon ] = result
    return Coupon

  } catch(err) {
    return {
      error: err.message
    }
  }
}


module.exports = {
  insert,
  findAll,
  findById,
  findByCurrentDay,
  findByNuipOrEmail
}