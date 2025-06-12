const Joi=require('joi')

const productSchema=Joi.object({
    title:Joi.string().required(),
    image:Joi.string().uri().required(),
    price:Joi.number().min(0).required(),
    quantity:Joi.number().integer().min(1).default(1),
    location:Joi.string().required(),
    category:Joi.string().valid('Fruits and Vegetables','Legumes and Oil Seeds','Cereals and Grains','Livestock and Plantation','Cash crops','Spices').required(),
    geometry:Joi.object({
        type:Joi.string().valid('Point').required(),
        coordinates:Joi.array().items(Joi.number()).length(2).required()
    }).required()
})

const userSchema=Joi.object({
    googleId:Joi.string().optional(),
    email:Joi.string().email().required(),
    location:Joi.string().required(),
    category:Joi.string().valid('farmer', 'buyer').required(),
    cart:Joi.array().items(Joi.string()).default([])
})

const homeSchema=Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    url:Joi.string().uri().required(),
    category:Joi.string().valid('Legumes and Oil Seeds', 'Cash crops', 'Livestock and Plantation', 'Spices', 'Cereals and Grains', 'Fruits and Vegetables').required()
})
module.exports = {
    productSchema,
    userSchema,
    homeSchema
}
