const { response } = require('express');
const { validarGoogleToken } = require('../helpers/validarGoogle');

const Users = require('../models/users');

const googleAuth = async ( req, res = response ) => {
    const { token } = req.body;
    try {
        const googleUser = await validarGoogleToken( token )
        if( !googleUser ){
            return res.status(400).json({
                ok : false,
                msg : 'No se verificó el token'
            });
        }
        const addUser = new Users({
            name: googleUser.name,
            imgPath: googleUser.imgPath,
            email: googleUser.email
        });
        await addUser.save();

        return res.status(200).json({
            ok: true,
            msg : addUser
        });
    } catch (error) {
        res.status(400).json({
            ok : false,
            msg : error
        });
    }

}

const login = async ( req, res = response ) => {
    const { token } = req.body;
    try {
        const googleUser = await validarGoogleToken( token )
        if( !googleUser ){
            return res.status(400).json({
                ok : false,
                msg : 'No se verificó el token'
            });
        }

        const user = await Users.findOne({
            email: googleUser.email
        });

        if( !user ){
            return res.status(400).json({
                ok : false,
                msg : 'No se ha encontrado el usuario'
            });
        }

        return res.status(200).json({
            ok: true,
            msg : user
        });
    } catch (error) {
        res.status(400).json({
            ok : false,
            msg : error
        });
    }

}

module.exports = {
    googleAuth,
    login
}