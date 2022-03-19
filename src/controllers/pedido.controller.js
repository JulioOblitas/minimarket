import { PedidoService } from "../services/pedido.service.js"
//import { pedidoDto } from "../services/dtos/request/pedido.dto.js"

export async function  crearPedido(req,res){
    
 try {
     
    const data = req.body
    
    console.log(data)
  /*  const  { clienteId,total,moneda,direccion_recojo, telefono, estado, usuarioId,fecha, detallepedido } = data
            
        const datapedido = {
            clienteId:clienteId,
            total:total, 
            moneda: moneda, 
            direccion_recojo: direccion_recojo,
            telefono:telefono,
            estado:estado,
            usuarioId:usuarioId,
            fecha:fecha                      
        }*/

           
           

//           console.log(datapedido)
            const resultado = await PedidoService.creaPedido(data);
            return res.status(201).json(resultado)
      
    
    }catch(error){
        return res.status(400).json({
        message : error.message, 
    });
    }
}

export async function  actualizarEstadoPedido(req,res){
  const id = +req.params.id
  
  try {
    
    const resultado = await PedidoService.actualizarEstadoPedido(id) 
    return res.json(resultado)
  } catch (error) {
    console.log(error)
  }
    
}

export async function  listarPedido(req,res){
    try {
        const resultado = await PedidoService.listarPedido ({      
        });
        
        return res.json(resultado);
      } catch (error) {
        console.log( error);
      }



    
}
//listarPedidoPorIdCliente

export async function  listarPedidoPorIdCliente(req,res){
  const id = +req.params.id
  try {
      const resultado = await PedidoService.listarPedidoPorIdCliente (id);
      
      
      
      return res.json(resultado);
    } catch (error) {
      console.log( error);
    }

}
export async function  listarPedidoPorId(req,res){
    const id = +req.params.id
    try {
        const resultado = await PedidoService.listarPedidoPorId(id);
        
        
        
        return res.json(resultado);
      } catch (error) {
        console.log( error);
      }
  
}

export async function  eliminarPedido(req,res){
    
    try {
        const id  = req.params.id
        
        const resultado = await PedidoService.eliminarPedido (id);
            
        return res.json(resultado);
      } catch (error) {
        console.log("es", error);
      }
    return
}
