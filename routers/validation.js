const Joi=require('@hapi/joi');

const registerValidation=function(data){
    const schema={
        name:Joi.string().min(6).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required(),
        phone_number:Joi.number().required()
    }
    return Joi.validate(data,schema)
}
const  loginValidation=function(data){
    const schema={
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    }
    return Joi.validate(data,schema)
}


module.exports.loginValidation=loginValidation;
module.exports.registerValidation=registerValidation;