import {Router} from "express"
import { crearProducto, listaProducto, listaProductoFE, eliminarProducto, listaProductoId,actualizarProducto,listaProductoNombre } from "../controllers/producto.controller.js"
export const productoRouter = Router()
productoRouter.route("/producto").post(crearProducto).get(listaProducto).get(listaProductoFE);
productoRouter.route("/productoFE").get(listaProductoFE);
productoRouter.route("/producto/:id").delete(eliminarProducto);
productoRouter.route("/producto/:id").get(listaProductoId);
productoRouter.route("/producto/:id").put(actualizarProducto);
productoRouter.route("/productobuscar").get(listaProductoNombre);
