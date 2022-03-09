import validator  from "validator"


export function productodto({nombre, precio,  tipoProductoId,  unimedId  }){ 

    if (validator.isEmpty(nombre)){
        throw Error("El nombre no puede ser vacio")
    }

    if (!validator.isFloat(precio.toString())){
        throw Error("El Precio solo puede ser numerico")
    }
    
    if (tipoProductoId == 0 ){
        throw Error("El id tipoproducto debe ser > 0")
    }
    if (!validator.isNumeric(tipoProductoId.toString())){
        throw Error("El id tipoproducto debe ser un numero")
    }
    
    if (!validator.isNumeric(unimedId.toString())){
        throw Error("El id de unidad de medida  debe ser un numero")
    }
    if (unimedId == 0 ){
        throw Error("El id unidad debe ser > 0")
    }

    
    return { nombre, precio , tipoProductoId, unimedId }
}


              
