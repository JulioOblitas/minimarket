import validator  from "validator"


export function tipoProductodto({nombre}){ 

    
if (validator.isEmpty(nombre)){
        throw Error("TIPO PRODUCTO NO PUEDE SER VACIO")
}
    return {nombre}
}
              
