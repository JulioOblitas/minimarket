
import { TipoProductoService   } from "../services/tipoProducto.service.js"
import { tipoProductodto } from "../services/dtos/request/tipoProducto.dto.js"


export async function crearTipoProducto(req, res) {
  //console.log(req.headers);
  try {
    const data  =   tipoProductodto(req.body)
    
    const resultado = await TipoProductoService.crearTipoProducto (
        data    );
        
    return res.status(201).json(resultado)
  }catch(error){
    return res.status(400).json({
        message : error.message, 
    });
}
}

export async function listaTipoProducto(req, res) {
  //console.log(req.headers);
  try {
    const resultado = await TipoProductoService.listaTipoProducto  ({      
    });
    
    return res.json(resultado);
  } catch (error) {
    console.log( error);
  }
}

export async function listaTipoProductoId(req,res) {
  
const  id   = +req.params.id
  
  try{
    const resultado = await TipoProductoService.listaTipoProductoId(id);    
    return res.json(resultado);
  } catch (error) {
    console.log(error);
  }

}

export async function listaTipoProductoNombre(req,res) {

  
  const  params   = req.query
  
  


  try {
    const resultado = await TipoProductoService.listaTipoProductoPorNombre(params.nombre);
    
    return res.json(resultado);
  } catch (error) {
    console.log(error);
  }
}

export async function eliminarTipoProducto(req, res) {
  //console.log(req.headers);
  try {
    const id  = req.params.id
    
    const resultado = await TipoProductoService.eliminarTipoProducto (id);
        
    return res.json(resultado);
  } catch (error) {
    console.log("es", error);
  }
}

export async function actualizarTipoProducto(req, res) {
      

 
   
  try {
    const data = tipoProductodto (req.body)
    
  
     const id  = +req.params.id
   
    //const passwordencriptado = hashSync(data.password,10)  
    
    
    const resultado = await TipoProductoService.actualizarTipoProducto (id,data.nombre) ;
   // return res.status(201).json({
    //  content: resultado});
    //return resultado;
    return res.status(201).json(resultado)
}catch(error){
  return res.status(400).json({
      message : error.message,  
  });
}

}



