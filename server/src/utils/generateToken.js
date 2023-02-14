const jwt = require('jsonwebtoken')

export const tokenSign=async(user)=>{
  return jwt.sign(
    {
      id:user.id_,
      email:user.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn:process.env.JWT_EXPIRE_IN
    }
  )
}

export const verifyToken=async(token)=>{
  try {
    return jwt.verify(token,process.env.JWT_SECRET)
  } catch (error) {
    return null    
  }
}