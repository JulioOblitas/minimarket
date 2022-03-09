import validator  from "validator"


export function tipoUsuariodto({correo, password, usuario, tipoUsuario, permisoId}){ 

    if (!validator.isEmail(correo)){
        throw Error('El correo debe ser un correo valido') 
    }    
    if (!validator.isStrongPassword(password)){
        throw Error('La contraseña no es segura')
    }
    
    if (validator.isEmpty(usuario)){
        throw Error("MODO CREACION - Usuario No puede ser Vacio")

    }
    if (validator.isEmpty(tipoUsuario)){
        throw Error("MODO CREACION - Tipo Usuario debe ser  ADMIN CLIENTE SUPER ADMIN")
}




if (permisoId == 0 ){
    throw Error("El idpermiso  debe ser >= 0")
}


    return {correo, password,usuario,tipoUsuario, permisoId}
}
              
