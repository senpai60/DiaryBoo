import {connectDB} from './config/db.config.js';
await connectDB()

import express from 'express';
import usersRouter from './routes/users.js';
import cookieParser from 'cookie-parser';
import { logger } from './utils/logger.js';

const app = express();
app.use(express.json());
app.use(cookieParser());  // ✅ With parenthesis!

app.use(express.urlencoded({ extended: true })); // Optional: use for form submissions

app.get('/', (req, res) => {
  res.json({ message: 'API running!' });
});

app.use('/users', usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info("The server is running on http://localhost:" + PORT);
});


export default app;
