import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: "json" };

//declaring routes
import assignmentRoutes from './routes/assignment.js';
import commentRoutes from './routes/comment.js';
import requestRoutes from './routes/request.js';
import userRoutes from './routes/user.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//routes
app.use('/assignment', assignmentRoutes);
app.use('/comment', commentRoutes);
app.use('/solicitud', requestRoutes);
app.use('/usario', userRoutes);



//MongoDB Cloud Atlas
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
