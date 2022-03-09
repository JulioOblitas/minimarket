import {Router} from "express"
import {crearArchivo, devolverArchivo}  from  "../controllers/archivo.controller.js"

export const  archivoRouter = Router()

archivoRouter.route("/subirimagen").post(crearArchivo)
archivoRouter.route("/subirimagen").get(devolverArchivo)

