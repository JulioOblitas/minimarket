import { Router } from "express";
import { crearTipoProducto, listaTipoProducto, eliminarTipoProducto, listaTipoProductoId,actualizarTipoProducto, listaTipoProductoNombre } from "../controllers/tipoProducto.controller.js";
export  const  tipoProductoRouter = Router()

tipoProductoRouter.route("/tipoproducto").post(crearTipoProducto).get(listaTipoProducto);
tipoProductoRouter.route("/tipoproducto/:id").delete(eliminarTipoProducto);
tipoProductoRouter.route("/tipoproducto/:id").get(listaTipoProductoId);
tipoProductoRouter.route("/tipoproducto/:id").put(actualizarTipoProducto);
tipoProductoRouter.route("/tipoproductobuscar").get(listaTipoProductoNombre);


