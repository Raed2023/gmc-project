const {check, validationResult} =require ("express-validator")


exports.sginUp=()=>[
    check("fullName","this fild is required").notEmpty(),
    check("email","this fild is required").notEmpty(),
    check("email","this should be a valid email").isEmail(),
    check("password","the length should be at least 5 character").isLength({min:5}),
]
exports.validator=(req,res,next)=>{
    const errors=validationResult(req)
    return errors.isEmpty()?next():res.status(400).json({erros:errors.array()})
}