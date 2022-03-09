
import { prisma } from "../prisma.js";
import {s3} from "../utils/s3.js"
 
export class ArchivosService{

    static async crearArchivo(data){


       const productoEncontrado = await prisma.producto.findUnique({
        where : { id: data.productoId},
        select :{ imagen : true} ,
        rejectOnNotFound : true,
        })

        if (productoEncontrado.imagen !== null){
            return{
                message: "el producto ya tiene una imagen y luego vuelva a crear  el archivo",
            };
        }
            //console.log(data)
        
        
        const path  = `archivos/productos/${data.productoId}`
        const Key = `${path}/${data.filename}.${data.ext}`
       
      //console.log(Key)
        
        const url = s3.getSignedUrlPromise('putObject',{
        Key,
        ContentType : data.contentType,
        Bucket  : process.env.AWS_BUCKET,
        Expires : +process.env.AWS_SIGNED_EXPRESS_IN,        
        });
         
        await prisma.producto.update({
            data: {imagen: Key},
        where :{id : data.productoId},
        
        })

        return url;
    }
    
    
    static devolverURL(path){

       // console.log("holadddd", path);
        //const path  = `archivos/productos/${data.productoId}`
        //const key = `${path}/${data.filename}.${data.ext}`
       

        return s3.getSignedUrl('getObject',{
            Key : path,
            Bucket  : process.env.AWS_BUCKET,
            Expires : 6000,            
        });
    }

    static  eliminarArchivo (path) {
        s3.deleteObject({
            Bucket  : process.env.AWS_BUCKET,        
            Key : path
        },
        (error,data) =>{
            if (error){
            console.log("el error es");
            console.log(error)
            }
            if (data){
                console.log("la data es");
                console.log(data)
                }                
        }
        );
    }
}
