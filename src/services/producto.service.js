import { prisma } from "../prisma.js";
import  Prisma from "@prisma/client";
import { ArchivosService } from "./archivo.service.js";

export class ProductoService{
    
    static async crearProducto(data){
   
    const content   = await prisma.producto.create({data});            
    return content;
    }

    

    //endpoint para cargar el front

    static async listaProductoFE(){
        const lista  = await prisma.producto.findMany({            
            orderBy :[
                {
                id : 'asc',
                }
            ]
        })
        
        return lista;

    }

    
    static async listaProducto(){
        /*const lista  = await prisma.producto.findMany({            
            orderBy :[
                {
                id : 'asc',
                }
            ]
        })*/
        const lista = await prisma.producto.findMany({
            // Returns all user fields
            include: {
                uniMed: {
                select: {
                    descripcion: true,
                },
            },
                tipoProductosa: {
                    select: {
                      nombre: true,
                    },   
              
            },
        },        
          })




        return lista;

    }



    static async listaProductoId(id){

        
        
     /*const lista  = await prisma.producto.findUnique({            
            where : { id : id  },
            
            rejectOnNotFound: false,
        
        
        });      */

        const lista  = await prisma.producto.findUnique({
        where : { id: id  },
        include: {
            uniMed: {
            select: {
                descripcion: true,
            },
        },  
            tipoProductosa: {
                select: {
                  nombre: true,
                },   
          
        },
    },        
        rejectOnNotFound: false,
      })
  
    if (lista  === undefined){
        return {
        message : "no existe el producto"
        };
    }
    
    //devolver amazon
    //const productoConImagen = {
    //    ...lista, imagen:lista.imagen  &&  ArchivosService.devolverURL(lista.imagen),
   // }
    
     return lista
     
    
  
  
     
    }

    static async listaProductoPorNombre(nombre){
       
        /*const lista = await prisma.producto.findMany({
            // Returns all user fields
            include: {
                uniMed: {
                select: {
                    descripcion: true,
                },
            },
                tipoProductosa: {
                    select: {
                      nombre: true,
                    },   
              
            },
        },
          })*/
        const lista  = await prisma.producto.findMany ({            
            where : { nombre: nombre },
            select : { nombre: true, precio: true,  uniMed: {
                  select: {
                    descripcion: true,
                  },
                },
                  tipoProductosa: {
                    select: {
                      nombre: true,
                    },                
                },
            },
            rejectOnNotFound: false
        });      
        

        
        return lista;
    }

    static async eliminarProducto(id){
    
        const productoEncontrado = await prisma.producto.findUnique({
            where :{ id: Number(id) } ,
            rejectOnNotFound: true,
            select:{ imagen : true}
        })

           /*eliminar amazon*/ 
        /*  if (productoEncontrado.imagen != null){
            ArchivosService.eliminarArchivo(productoEncontrado.imagen);                
        }*/
        const  eliminar = await prisma.producto.delete({ where :{ id: Number(id) }}); 
         
        return eliminar;    

            
    }
    
    static async actualizarProducto(id,data){
            console.log(data)
        try{
            
           
                
                const  actualizar = await prisma.producto.update({
                    where: {id: +id},        
                    data: { nombre: data.nombre,
                            precio: +data.precio,
                             tipoProductoId: +data.tipoProductoId, unimedId: +data.unimedId, imagen:data.imagen },                    
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

