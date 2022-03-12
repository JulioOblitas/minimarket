import { prisma } from "../prisma.js";
import fetch from "node-fetch";

export class FacturacionService {
  static async generarComprobante(data) {

    //console.log(data)
    
    try {
      let tipo_de_comprobante;
      //const { items, cliente } = data;

           tipo_de_comprobante = 1;
          const serie = "FFF1";
  
      const numero = 2;
      
      //const   xcliente  = data.cliente.doi
      //console.log(xcliente)
      
      // traer la informacion del cliente
      //const clienteEncontrado = await  prisma.cliente.findById(cliente);
      
      let total_gral = 0;

      
      const items = await prisma.pedidoDetalle.findMany ({            
        where : { pedidoId: Number(data.id)},
          });
      
          console.log(items)

      
      
      const productos = await Promise.all(
       
        items.map(async ({ productoId, cant }) => {
          const productoEncontrado = await prisma.producto.findFirst({                      
            where : { id: Number(productoId)}
          }
            );

          total_gral = total_gral + productoEncontrado.precio * cant;
          const valor_unitario = productoEncontrado.precio / 1.18; // precio sin igv
          const subtotal = (productoEncontrado.precio / 1.18) * cant; // al precio se le quita el igv y se le multiplica por la cantidad
          const total_prod = productoEncontrado.precio * cant; // el precio con IGV
          const igv = total_prod - subtotal;

          return {
            unidad_de_medida: "NIU",
            codigo: productoEncontrado.id,
            descripcion: productoEncontrado.nombre,
            cantidad:cant,
            valor_unitario:valor_unitario,
            precio_unitario: +productoEncontrado.precio,
            subtotal:subtotal,
            tipo_de_igv: 1,
            total: total_prod,
            igv:igv,
            anticipo_regularizacion: false,
          };
        })
      );
      
      let cliente_tipo_de_documento;
      switch (data.cliente.tipodoc) {
        case "DNI":
          cliente_tipo_de_documento = "1";
          break;
        case "RUC":
          cliente_tipo_de_documento = "6";
          break;
      
      }

      //const fecha = new Date();
      const fecha = new Date();
      const day = fecha.getDate() < 9 ? "0" + fecha.getDate() : fecha.getDate();
      const month =
        fecha.getMonth() + 1 < 9
          ? "0" + (fecha.getMonth() + 1)
          : fecha.getMonth() + 1;

      const year = fecha.getFullYear();
      const fecha_de_emision = day + "-" + month + "-" + year;

      const bodyNubefact = {
        operacion: "generar_comprobante",
        tipo_de_comprobante,
        serie,
        numero,
        sunat_transaction: 1,
        moneda: 1,
        cliente_tipo_de_documento,
        cliente_numero_de_documento: data.cliente.doi,
        cliente_denominacion: data.cliente.razonsocial,
        cliente_direccion: data.cliente.direccionfiscal,
        cliente_email: data.cliente.email,
        fecha_de_emision,
        items: productos,
        enviar_automaticamente_a_la_sunat: true,
        enviar_automaticamente_al_cliente: true,
        formato_de_pdf: "A4",
        porcentaje_de_igv: 18.0,
        // FALTA
        total: total_gral,
        total_gravada: total_gral / 1.18,
        total_igv: total_gral - total_gral / 1.18,
      };

      console.log(bodyNubefact)

      
      const resultado = await fetch(process.env.NUBEFACT_URL, {
        method: "POST",
        body: JSON.stringify(bodyNubefact),
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.NUBEFACT_TOKEN,
        },
      });
      const dataNubefact = await resultado.json();
      console.log(dataNubefact)
      return {
        message: "ok",
        data: dataNubefact,
      };
    } catch (error) {
      console.log(error);
      return {
        message: "false",
      };
    }
  }

  static async consultarComprobante(id) {}
}