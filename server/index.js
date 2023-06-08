import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from './swagger.json' assert { type: "json" };
import knex from 'knex';
//dotenv
import * as dotenv from 'dotenv'
dotenv.config()
//declaring routes
import assignmentRoutes from './routes/assignment.js';
import commentRoutes from './routes/comment.js';
import requestRoutes from './routes/request.js';
import userRoutes from './routes/user.js';
import announcementRoutes from './routes/announcement.js'

const app = express();

export const db = knex({
    client: 'mysql2',
    connection: {
      host : process.env.DATABASE_URL,
      port : process.env.DATABASE_PORT,
      user : process.env.DATABASE_USER,
      password : process.env.DATABASE_PASSWORD,
      database : process.env.DATABASE_NAME,
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

//swagger
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//routes
app.use('/assignment', assignmentRoutes);
app.use('/comment', commentRoutes);
app.use('/request', requestRoutes);
app.use('/user', userRoutes);
app.use('/announcement', announcementRoutes);


//MongoDB Cloud Atlas
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));