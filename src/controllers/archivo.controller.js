import  { ArchivosService } from "../services/archivo.service.js"
import  { archivodto} from "../services/dtos/request/archivo.dto.js"

export async function crearArchivo(req,res){
    try{

    
    const data =  archivodto(req.body)
    const url  = await  ArchivosService.crearArchivo(data)
    return res.status(201).json({url})

    }catch (error){
        return  res.status(400).json({
            message:  error.message
        })

    }

}

export async function devolverArchivo(req,res){
        console.log("hola soy controler",req.body)
    try{

    const data =  archivodto(req.body)

    const url  = await  ArchivosService.devolverURL(data)
    return res.status(201).json({url})

    }catch (error){
        return  res.status(400).json({
            message:  error.message
        })

    }

}