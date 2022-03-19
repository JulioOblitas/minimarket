
import {prisma} from "../prisma.js"
import Prisma from  "@prisma/client"

export class  PedidoService{

    static async creaPedido(data) {

           const contentpedido   = await prisma.pedido.create({data})
             
                          
        return contentpedido;
    } 
   
    static async listarPedido(){
      
        const lista = await prisma.pedido.findMany  ({            
        include: {
                 pedidodetalle: {                            
                            include: {                           
                                    productos: true,                                                                      
                                },  
                            include: {                           
                                  unidadesmed: true,                                      
                              },                                                                                                                         
                },            
                cliente:{                  
                }
            },
          });
      
        return lista;

    }

    static async listarPedidoPorId(id){
                
        const lista = await prisma.pedido.findUnique({            
        where : { id: Number(id)},
        include: {
                 pedidodetalle: {                            
                            include: {                           
                                    productos: true,                                                                                                          
                                    unidadesmed: true                                    
                                },                                                                                                                                                                                       
                },                
                cliente:{                  
                }   
                         
            },
          });

         
        return lista;

    }

    static async listarPedidoPorIdCliente(id){
                
      const lista = await prisma.pedido.findMany({            
      where : { clienteId: Number(id)},
      include: {
               pedidodetalle: {                            
                          include: {                           
                                  productos: true,                                                                                                          
                                  unidadesmed: true                                    
                              },                  
                                                       
                                                                                                          
              },                
              cliente:{                  
              }                          
          },
        });

       
      return lista;

  }



    
    static async clistarPedidoPorId(id){
     //   console.log(id) 
      const lista = await prisma.pedido.findUnique({            
            where : { id : id },
            rejectOnNotFound: false,
        });
    
      return lista;

  }
    static async actualizarEstadoPedido(id){
      const actualizaEstado = await prisma.pedido.update({
        where : { id: Number(id)},
        data : { estado: "FACTURADO"}
      })
      return actualizaEstado
    }

    static async eliminarPedido(id){
        
        const listadetalle = await prisma.pedidoDetalle.deleteMany({            
            where : { pedidoId: Number(id)},        
          });
        
          const lista = await prisma.pedido.delete({            
            where : { id: Number(id)},
        
          });
      
        return lista;

    }


    }

