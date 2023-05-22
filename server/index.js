import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: "json" };

//declaring routes
import asignacionRoutes from './routes/asignacion.js';
import comenatrioRoutes from './routes/comentario.js';
import solcitudRoutes from './routes/solicitud.js';
import usuarioRoutes from './routes/usuario.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//routes
app.use('/asignacion', asignacionRoutes);
app.use('/comentario', comenatrioRoutes);
app.use('/solicitud', solcitudRoutes);
app.use('/usario', usuarioRoutes);



//MongoDB Cloud Atlas
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
