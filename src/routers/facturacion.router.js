import { Router } from "express";
import { crearComprobante } from "../controllers/facturacion.controller.js";

export const facturacionRouter = Router();

facturacionRouter.post("/crear-comprobante", crearComprobante);