
import { ProductoService   } from "../services/producto.service.js"
import { productodto } from "../services/dtos/request/producto.dto.js"


export async function crearProducto(req, res) {
  //console.log(req.headers);
  try {
    const data  =   productodto(req.body)

    
    const resultado = await ProductoService.crearProducto (
        data    );
        
    return res.status(201).json(resultado)
  }catch(error){
    return res.status(400).json({
        message : error.message, 
    });
}
}

export async function listaProducto(req, res) {
  //console.log(req.headers);
  try {
    const resultado = await ProductoService.listaProducto  ({      
    });
    
    return res.json(resultado);
  } catch (error) {
    console.log( error);
  }
}

export async function listaProductoFE(req, res) {
  //console.log(req.headers);
  try {
    const resultado = await ProductoService.listaProductoFE  ({      
    });
    
    return res.json(resultado);
  } catch (error) {
    console.log( error);
  }
}

export async function listaProductoId(req,res) {
  
const  id   = +req.params.id
  
  try{
    const resultado = await ProductoService.listaProductoId(id);    
    return res.json(resultado);
  } catch (error) {
    console.log(error);
  }

}



export async function listaProductoNombre(req,res) {

  
  const  params   = req.query
  
  


  try {
    const resultado = await ProductoService.listaProductoPorNombre(params.nombre);
    
    return res.json(resultado);
  } catch (error) {
    console.log(error);
  }
}

export async function eliminarProducto(req, res) {
  //console.log(req.headers);
  try {
    const id  = req.params.id
    
    const resultado = await ProductoService.eliminarProducto (id);
        
    return res.json(resultado);
  } catch (error) {
    console.log("es", error);
  }
}

export async function actualizarProducto(req, res) {
      

 
   
  try {
    //const data=productodto (req.body)
    const data=req.body
  
  
     const id  = +req.params.id
   
    //const passwordencriptado = hashSync(data.password,10)  
    
    
    const resultado = await ProductoService.actualizarProducto (id,data) ;
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



