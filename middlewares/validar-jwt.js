

const jwt = require('jsonwebtoken');


const validarJWT = (req, res, next) => {

    //leer el token
    const token = req.header('x-token')

    //si no hay token retorna-cancela-.
    if (!token){
        return res.status(400).json({
            ok:false,
            msg:'No hay token en la peticion'
        });
    }

    try {
        
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        console.log(uid);
        req.uid = uid;
        next();

    } catch (error) {
        return res.status(401).json({
            ok:false,
            msg:'token no valido'
        });
    }

}

module.exports = { 
    validarJWT
};

