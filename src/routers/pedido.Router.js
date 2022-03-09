import express, { Router } from "express";
import {crearPedido, listarPedido, listarPedidoPorId , eliminarPedido} from "../controllers/pedido.controller.js"
//, actualizarPedido, eliminarPedido, listarPedidoPorId

export const  pedidoRouter = Router()

pedidoRouter.route("/pedido").post(crearPedido).get(listarPedido)
pedidoRouter.route("/pedido/:id").get(listarPedidoPorId)
pedidoRouter.route("/pedido/:id").delete(eliminarPedido)

/*pedidoRouter.route("/pedido/:id").put(actualizarPedido)*/

