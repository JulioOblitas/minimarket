import { Router } from "express";
import { crearCliente ,  listaCliente , eliminarCliente, listaClienteId,  listaClienteDoi, actualizarCliente,  listaClienteNombre  } from "../controllers/cliente.controller.js"
export  const  clienteRouter = Router()

clienteRouter.route("/cliente").post(crearCliente).get(listaCliente);
clienteRouter.route("/cliente/:id").delete(eliminarCliente);
clienteRouter.route("/cliente/:id").get(listaClienteId);
clienteRouter.route("/cliente/:id").put(actualizarCliente);
clienteRouter.route("/clientebuscarnombre").get(listaClienteNombre);
clienteRouter.route("/clientebuscardoi").get(listaClienteDoi);