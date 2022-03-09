import { prisma } from "../prisma.js";
import  Prisma from "@prisma/client";

export class TipoUniMedService{
    
    static async crearUniMed(data){
    
    const content   = await prisma.unidadMedida.create({data});            
    return content;
    }

    static async listaUniMed(){
        const lista  = await prisma.unidadMedida.findMany({            
            orderBy :[
                {
                id : 'asc',
                }
            ]
        }) 
      
        return lista;

    }

    static async listaUniMedId(id){

        
        
        const lista  = await prisma.unidadMedida.findUnique({            
            where : { id : id  },
            rejectOnNotFound: false,
        });      
        return lista;
    }

    static async listaUniMedPorNombre(descripcion){
       
        const lista  = await prisma.unidadMedida.findMany ({            
            where : { descripcion: descripcion },
            select : { descripcion: true, desc_abreviada:true },
            rejectOnNotFound: false,
        });      
        return lista;
    }

    static async eliminarUniMed(id){
    
        const eliminar  = await prisma.unidadMedida.delete ({            
            where: { id: Number(id)},                        
            })
            return eliminar;    
    }
    
    static async actualizarUnimed(id, descripcion, descabrev){
               
            try{
            
                const  actualizar = await prisma.unidadMedida.update ({
                    where: {id: +id} ,        
                    data: {
                        descripcion : descripcion,
                        desc_abreviada : descabrev,
                    },
                })
                        
                return  {content : actualizar};
            }catch(error){
                    //if (error instanceof Prisma.Prisma.PrismaClientUnknownRequestError){
                    return {
                        message: "Error al Actualizar Unid Med",
                        content: error.message,
                    //}
                }
            }
          
    }
}

