import { prisma } from "../prisma.js"
//import jwt  from "jsonwebtoken"

/*export function verificarToken(token){
    try {
            const payload = jwt.verify(token, process.env.JWT_SECRET)
        return payload    
    } catch (error) {
        return error
        
    }
}*/

export async function validarUsuario(req,res,next){
    //middleware
    //es un intermediario entre el cliente y el controlador final

  /*  if (!req.headers.authorization){
        return res.status(401).json({
            message: "Se necesita una token NIVEL SUPER ADMIN  para realizar esta solicitud"
        })
    }
    const token  = req.headers.authorization.split(" ")[1]
    const resultado  = verificarToken(token)

    if (resultado instanceof jwt.JsonWebTokenError) {
        return res.status(401).json({
            message: "La token es invalida, intente nuevamente",
            razon : resultado.message
        })   
    }
    */

    //console.log(req.body)

    const id  = +req.params.id
    const usuario  = await prisma.usuario.findUnique({
        where: {id: Number(id)},
        select: { correo:true,  tipoUsuario:true, id:true},
         rejectOnNotFound: true
    })
    

    const tipousuario = usuario.tipoUsuario
    if (tipousuario === "ADMIN") {
        return res.status(401).json({
            message: "USTED ES ADMIN Y NO PUEDE BORRARSE ASI MISMO, SOLO SUPERADMIN PUEDE HACERLO",            
        })   
    }
    req.user  = usuario
    next();
}


