import { Router } from "express";
import { listaPermiso  } from "../controllers/tipoPermiso.controller.js"
export  const  tipoPermisoRouter = Router()

tipoPermisoRouter.route("/permiso").get(listaPermiso);
