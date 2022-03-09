import { prisma } from "../prisma.js";
import  Prisma from "@prisma/client";

export class TipoPermiso{
    
    
    static async listaPermiso(){
        const lista  = await prisma.permiso.findMany({            
            orderBy :[
                {
                id : 'asc',
                }
            ]
        }) 
     
        return lista;

    }
}
    