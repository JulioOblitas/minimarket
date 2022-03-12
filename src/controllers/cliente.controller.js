
import { ClienteService } from "../services/cliente.service.js"
//import { tipoUnidMedDto } from "../services/dtos/request/tipoUnidMed.dto.js"


export async function crearCliente (req, res) {
  
  try {
    //const data  =   tipoUnidMedDto(req.body)
    const data  =   req.body
    
    const resultado = await  ClienteService.crearCliente (data);
        
    return res.status(201).json(resultado)
  }catch(error){
    return res.status(400).json({
        message : error.message, 
    });
}
}

export async function listaCliente(req, res) {
  //console.log(req.headers);
  try {
    const resultado = await ClienteService.listaCliente ({      
    });
    
    return res.json(resultado);
  } catch (error) {
    console.log( error);
  }
}

export async function listaClienteId(req,res) {
  
const  id   = +req.params.id
  
  try{
    const resultado = await  ClienteService.listClienteId (id);    
    return res.json(resultado);
  } catch (error) {
    console.log(error);
  }

}

export async function listaClienteNombre(req,res) {

  
  const  params   = req.query
  
  try {
    const resultado = await ClienteService.listaClientePorNombre (params.razonsocial);
    
    return res.json(resultado);
  } catch (error) {
    console.log(error);
  }
}

export async function listaClienteDoi(req,res) {

  
  const  params   = req.query
  
  try {
    const resultado = await ClienteService.listaClientePorDoi (params.doi);
    
    return res.json(resultado);
  } catch (error) {
    console.log(error);
  }
}

export async function eliminarCliente(req, res) {
  //console.log(req.headers);
  try {
    const id  = req.params.id
    
    const resultado = await  ClienteService.eliminarCliente (id);
        
    return res.json(resultado);
  } catch (error) {
    console.log("es", error);
  }
}

export async function actualizarCliente(req, res) {
      

 
   
  try {
    //const data = tipoUnidMedDto (req.body)
    const data = req.body
  
     const id  = +req.params.id
   
    //const passwordencriptado = hashSync(data.password,10)  
    
    
    const resultado = await ClienteService.actualizarCliente (id,data.razonsocial,data.doi,data.email,data.telefono, data.tipodoc,data.direccionfiscal) ;
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



