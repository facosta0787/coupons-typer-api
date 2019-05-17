const service = require('./service')

const list = async (req, res) => {
  const { couponId } = req.params

  if(couponId) {
    return res.json({
      status: 200,
      message: 'Ok',
      data: await service.findById(couponId),
    })
  }

  return res.json({
    status: 200,
    message: 'Ok',
    data: await service.findAll(),
  })
}

const listDigitedCurrentDay = async (req, res) => {
  const { user } = req.params

  if(!user) {
    return res.status(400).json({
      status:400,
      message: 'Error: Debe especificar el usuario',
      data: null
    })
  }

  return res.status(200).json({
    status: 200,
    message: 'Ok',
    data: await service.findByCurrentDay(user)
  })
}

const listByNuip = async (req, res) => {
  const { nuip } = req.params

  if(!nuip) {
    return res.status(400).json({
      status:400,
      message: 'Error: Debe especificar el documento',
      data: null
    })
  }

  return res.status(200).json({
    status: 200,
    message: 'Ok',
    data: await service.findByNuipOrEmail(nuip)
  })
}

const create = async (req, res) => {
  const { data } = req.body

  const coupon = await service.insert(data)

  if(coupon.error) {
    console.error(JSON.stringify(coupon, null, 2))
    return res.status(400).json({
      status: 400,
      message: 'Error - Solicitud incorrecta',
      data: coupon.error,
    })
  }

  return res.status(201).json({
    status: 201,
    message: 'Ok',
    data: coupon,
  })
}

module.exports = {
  list,
  listDigitedCurrentDay,
  listByNuip,
  create,
}
