import validator from "validator"

export function tipoUnidMedDto({descripcion, desc_abreviada}){ 

    
    if (validator.isEmpty(descripcion)){
            throw Error("DESCRIPCION NO PUEDE SER VACIO")
    }

    if (validator.isEmpty(desc_abreviada)){
        throw Error("DESCRIPCION ABREVIADA NO PUEDE SER VACIO")
}

        return {descripcion,desc_abreviada}
    }
                  
    