import { Router } from "express";
import { crearUniMed,  listaUniMed , eliminarUniMed, listaUniMedId,actualizarUniMed,  listaUniMedNombre } from "../controllers/tipoUniMed.controller.js";
export  const  tipoUnidMedRouter = Router()

tipoUnidMedRouter.route("/tipounidmed").post(crearUniMed).get(listaUniMed);
tipoUnidMedRouter.route("/tipounidmed/:id").delete(eliminarUniMed);
tipoUnidMedRouter.route("/tipounidmed/:id").get(listaUniMedId);
tipoUnidMedRouter.route("/tipounidmed/:id").put(actualizarUniMed);
tipoUnidMedRouter.route("/tipounidmedbuscar").get(listaUniMedNombre);