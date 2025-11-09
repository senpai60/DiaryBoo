import {connectDB} from './config/db.config.js';
await connectDB()

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import morgan from 'morgan';
import { logger } from './utils/logger.js';

const app = express();

import { corsOptions } from './utils/corsOptions.utils.js';

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions))  

app.use(express.urlencoded({ extended: true })); // Optional: use for form submissions

app.use(morgan("dev"))


app.get('/', (req, res) => {
  res.json({ message: 'API running!' });
});

// routes
import usersRouter from './routes/users.js';
app.use('/users', usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info("The server is running on http://localhost:" + PORT);
});



export default app;
