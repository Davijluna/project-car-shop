import express from 'express'; // ok
import 'express-async-errors'; // ok
import errorHandler from './middlewares/error'; // ok
import carsRouter from './routes/Car';

const app = express(); // ok
app.use(express.json()); // ok

app.use('/cars', carsRouter);
app.use(errorHandler);

export default app; // ok
