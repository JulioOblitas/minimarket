import { prisma } from "../prisma.js";
import  Prisma from "@prisma/client";

export class ClienteService{
    
    static async crearCliente(data){
    console.log(data)
    
    const content   = await prisma.cliente.create({data});            
    return content;
    }

    static async listaCliente(){
        const lista  = await prisma.cliente.findMany({            
            orderBy :[
                {
                id : 'asc',
                }
            ]
        }) 
      
        return lista;

    }

    static async listClienteId(id){

        
        
        const lista  = await prisma.cliente.findUnique({            
            where : { id : id  },
            rejectOnNotFound: false,
        });      
        return lista;
    }

    static async listaClientePorNombre(razonsocial){
       
        const lista  = await prisma.cliente.findMany ({            
            where : { razonsocial: {
             contains: razonsocial, }, },          
            rejectOnNotFound: false,
        });      
        return lista;
    }

    static async listaClientePorDoi(doi){
       
        const lista  = await prisma.cliente.findMany ({            
            where : { doi: doi },            
            rejectOnNotFound: false,
        });      
        
        return lista;
    }

    static async eliminarCliente(id){
    
        'buscamos el id del cliente en la tabla pedidos'
       try{
        const idclienteencontrado  = await prisma.pedido.findFirst({
            where: { clienteId: Number(id) },            
            select: {id : true },
            rejectOnNotFound: false,
        }) 
        //console.log(catidencontrado)
        if (idclienteencontrado) {
            return{ message: "CON MOVIMIENTOS"}
        }
        
        else{
        const eliminar  = await prisma.cliente.delete ({            
            where: { id: Number(id)},                        
            })
            return eliminar;    
        }  
        }catch(error){
            return {
                
                message: "Error al eliminar Cliente",
                content: error.message,                   
            }
        
        }
          
    }
    
    static async actualizarCliente(id, razonsocial, doi, email,telefono,tipodoc,direccion){
               
            try{            
                const  actualizar = await prisma.cliente.update ({
                    where: {id: +id} ,        
                    data: {
                        razonsocial : razonsocial,
                        doi: doi,
                        email: email,
                        telefono: telefono,
                        tipodoc: tipodoc,
                        direccionfiscal: direccion 
                    },
                })

                return  {content : actualizar};
            }catch(error){
                    //if (error instanceof Prisma.Prisma.PrismaClientUnknownRequestError){
                    return {
                        message: "Error al Actualizar Cliente",
                        content: error.message,
                    //}
                }
            }
          
    }
}

