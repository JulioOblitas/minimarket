import  express , {json} from 'express'
import  cors  from "cors"
import morgan from 'morgan'
import { tipoProductoRouter } from "./routers/tipoProducto.Router.js"
import { tipoUsuarioRouter } from "./routers/tipoUsuario.Router.js"
import { tipoUnidMedRouter } from "./routers/tipoUniMed.Router.js"
import { productoRouter } from "./routers/producto.Router.js"
import { archivoRouter } from './routers/archivo.Router.js'
import { pedidoRouter } from './routers/pedido.Router.js'
import { tipoPermisoRouter } from './routers/tipoPermiso.Router.js'
import { clienteRouter  } from './routers/cliente.Router.js'

const app = express()   
const PORT  = process.env.PORT  ?? 3001

app.use(morgan('dev'))
app.use(json())
app.use(cors())
app.use(tipoProductoRouter)
app.use(tipoUsuarioRouter)
app.use(tipoUnidMedRouter)
app.use(productoRouter)
app.use(archivoRouter)
app.use(pedidoRouter)
app.use(tipoPermisoRouter)
app.use(clienteRouter)


app.listen(PORT, () =>{
    console.log(`ACTIVADO SERVIDOR" ${PORT}`)
} )
