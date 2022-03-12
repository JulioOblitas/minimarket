import { Router } from "express";
import { crearUsuario, listaUsuario, listaUsuarioPorId, eliminarUsuario, accederUsuario, actualizarUsuario, buscarUsuario  } from "../controllers/tipoUsuario.controller.js";
import { validarUsuario} from "../utils/validador.js";

export  const  tipoUsuarioRouter = Router()


tipoUsuarioRouter.route("/usuarioacceder").post(accederUsuario);
tipoUsuarioRouter.route("/usuario").post(crearUsuario).get(listaUsuario);
tipoUsuarioRouter.route("/usuario/:id").delete(validarUsuario ,eliminarUsuario)
                                        .put(actualizarUsuario).get(listaUsuarioPorId);
tipoUsuarioRouter.route("/buscarusuario").get(buscarUsuario)

