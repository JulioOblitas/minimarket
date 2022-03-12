import { hashSync } from "bcrypt";
import cryptojs from "crypto-js";

import { UsuarioService } from "../services/tipoUsuario.service.js"
import { tipoUsuariodto } from "../services/dtos/request/tipoUsuario.dto.js"


export async function accederUsuario(req,res){
  try {

    const {correo,password} = req.body
   
     
    const result  = await   UsuarioService.accederUsuario(correo,password);
   
    return res.status(200).json(result);

} catch (error) {
    return res.status(400).json({
        error : error.message,
        message : "error al hacer login"

    })
}
}


export async function crearUsuario(req, res) {
  
  try {
   
    const data =  tipoUsuariodto(req.body)   
    //console.log(data)
     
    //const passwordencriptado = hashSync(data.password,10)    

    //USAR ENCRIPTADOR cryptojs.AES.encrypt EN VEZ TOKEN
    const passwordencriptado = cryptojs.AES.encrypt(data.password, process.env.JWT_SECRET).toString()
    //console.log(passwordencriptado)

    data.password = passwordencriptado;
  
    const resultado = await UsuarioService.crearUsuario (data);
    return res.status(201).json(resultado)
  }catch(error){
      return res.status(400).json({
          message : error.message, 
      });
  }
}

export async function actualizarUsuario(req, res) {
      

    
   
      try {
        const data = tipoUsuariodto(req.body)
        
        
         const id  = +req.params.id
        //const passwordencriptado = hashSync(data.password,10)  
        const passwordencriptado = cryptojs.AES.encrypt(data.password, process.env.JWT_SECRET).toString()
        //console.log(passwordencriptado)
       // data.password = passwordencriptado;
    
        
        
        const resultado = await UsuarioService.actualizarUsuario(id,data.correo,passwordencriptado,data.usuario,data.tipoUsuario) ;
       // return res.status(201).json({
        //  content: resultado});
        //return resultado;
        return res.status(201).json(resultado)
  }catch(error){
      return res.status(400).json({
          message : error.message,  
      });
  }
 
}



export async function listaUsuarioPorId(req, res) {
  //console.log(req.headers);
  const id = +req.params.id
  try {
    const resultado = await UsuarioService.listaUsuarioPorId(id);
    
    return res.json(resultado);
  } catch (error) {
    console.log( error);
  }
}

export async function listaUsuario(req, res) {
  //console.log(req.headers);
  try {
    const resultado = await UsuarioService.listaUsuario();
    
    return res.json(resultado);
  } catch (error) {
    console.log( error);
  }
}

export async function eliminarUsuario(req, res) {
  //console.log(req.headers);
  try {
    const id  = req.params.id
    
    const resultado = await UsuarioService.eliminarUsuario (id);
        
    return res.json(resultado);
  } catch (error) {
    console.log("es", error);
  }
}



export async function buscarUsuario(req, res) {
  //console.log(req.headers);
  
  const  params   = req.query
  try {
    const resultado = await UsuarioService.buscarUsuario(params.correo)
    
    return res.json(resultado);
  } catch (error) {
    console.log( error);
  }
}
