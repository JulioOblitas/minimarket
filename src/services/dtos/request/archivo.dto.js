import validator from "validator";




export function archivodto ({productoId,contentType, ext, filename}){
  //  const  contenidosValidos = ["image/png", "image/jpg", "image/jpeg"];
   
    
    if (!validator.isNumeric(productoId.toString())){
        throw Error('El producto debe ser numerico') 
    }
    
    if (
      contentType !== "image/png" &&
      contentType !== "image/jpg" &&
      contentType !== "image/jpeg"
    ) {
      throw Error(
        "El contentType solo puede ser: image/png, image/jpg, image/jpeg"
      );
    }
  
    // hacer lo mismo con las extensiones
  
    if (
      !validator.equals(ext, "jpg") &&
      !validator.equals(ext, "png") &&
      !validator.equals(ext, "jpeg")
    ) {
      throw Error("La ext solo puede ser: jpg, png, jpeg");
    }
  
    if (validator.isEmpty(filename)) {
      throw Error("El filename no puede estar vacio");
    }
  
    return { productoId, contentType, ext, filename };
  }
