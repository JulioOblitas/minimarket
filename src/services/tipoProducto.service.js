import { prisma } from "../prisma.js";
import  Prisma from "@prisma/client";


export class TipoProductoService{
    
    static async crearTipoProducto(data){
    
    const content   = await prisma.tipoProducto.create({data});            
    return content;
    }

    static async listaTipoProducto(){
        const lista  = await prisma.tipoProducto.findMany({            
            orderBy :[
                {
                id : 'asc',
                }
            ]
        }) 
      
        return lista;

    }

    static async listaTipoProductoId(id){

        
        
        const lista  = await prisma.tipoProducto.findUnique({            
            where : { id : id  },
            rejectOnNotFound: false,
        });      
        return lista;
    }

    static async listaTipoProductoPorNombre(nombre){
       
        const lista  = await prisma.tipoProducto.findMany ({            
            where : { nombre: nombre },
            select : { nombre: true, id: true},
            rejectOnNotFound: false,
        });      
        return lista;
    }

    static async eliminarTipoProducto(id){
        
       'buscamos el id tipo de producto en la tabla productos'
       try{
        const catidencontrado  = await prisma.producto.findFirst({
            where: { tipoProductoId: Number(id) },            
            select: {nombre : true },
            rejectOnNotFound: false,
        }) 
        //console.log(catidencontrado)
        if (catidencontrado) {
            return{ message: `CON MOVIMIENTOS`}
        }
        
        else{
            const eliminar  = await prisma.tipoProducto.delete ({            
                where: { id: Number(id)},                        
            })    
            return eliminar            
        }

        
    }catch(error){
        return {
            
            message: "Error al eliminar TipoProducto",
            content: error.message,
        //}
    }

    }
    }
    
    static async actualizarTipoProducto(id, nombre){
               
            try{
            
                const  actualizar = await prisma.tipoProducto.update ({
                    where: {id: +id} ,        
                    data: {
                        nombre : nombre,
                    },
                })
                        
                return  {content : actualizar};
            }catch(error){
                    //if (error instanceof Prisma.Prisma.PrismaClientUnknownRequestError){
                    return {
                        message: "Error al Actualizar TipoProducto",
                        content: error.message,
                    //}
                }
            }
          
    }
}

