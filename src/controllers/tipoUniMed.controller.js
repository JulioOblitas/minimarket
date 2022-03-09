
import { TipoUniMedService } from "../services/tipoUnidMed.service.js"
import { tipoUnidMedDto } from "../services/dtos/request/tipoUnidMed.dto.js"


export async function crearUniMed (req, res) {
  //console.log(req.headers);

  console.log("hola")
  try {
    const data  =   tipoUnidMedDto(req.body)
    console.log(data)  
    const resultado = await TipoUniMedService.crearUniMed (data);
        
    return res.status(201).json(resultado)
  }catch(error){
    return res.status(400).json({
        message : error.message, 
    });
}
}

export async function listaUniMed(req, res) {
  //console.log(req.headers);
  try {
    const resultado = await TipoUniMedService.listaUniMed ({      
    });
    
    return res.json(resultado);
  } catch (error) {
    console.log( error);
  }
}

export async function listaUniMedId(req,res) {
  
const  id   = +req.params.id
  
  try{
    const resultado = await TipoUniMedService.listaUniMedId(id);    
    return res.json(resultado);
  } catch (error) {
    console.log(error);
  }

}

export async function listaUniMedNombre(req,res) {

  
  const  params   = req.query
  
  


  try {
    const resultado = await TipoProductoService.listaUniMedNombre (params.descripcion);
    
    return res.json(resultado);
  } catch (error) {
    console.log(error);
  }
}

export async function eliminarUniMed(req, res) {
  //console.log(req.headers);
  try {
    const id  = req.params.id
    
    const resultado = await TipoUniMedService.eliminarUniMed (id);
        
    return res.json(resultado);
  } catch (error) {
    console.log("es", error);
  }
}

export async function actualizarUniMed(req, res) {
      

 
   
  try {
    const data = tipoUnidMedDto (req.body)
    
  
     const id  = +req.params.id
   
    //const passwordencriptado = hashSync(data.password,10)  
    
    
    const resultado = await TipoUniMedService.actualizarUniMed (id,data.descripcion, data.desc_abreviada) ;
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



