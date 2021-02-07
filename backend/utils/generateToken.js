import jwt from 'jsonwebtoken';

const generateToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
       expiresIn:'30d'
    }) //sign(generating data,secret message,duration)
}

export default generateToken;

