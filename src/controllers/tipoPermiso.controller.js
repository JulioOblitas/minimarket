
import { TipoPermiso } from "../services/tipoPermiso.service.js"





export async function listaPermiso(req, res) {
  //console.log(req.headers);
  try {
    const resultado = await TipoPermiso.listaPermiso ({      
    });
    
    return res.json(resultado);
  } catch (error) {
    console.log( error);
  }
}






