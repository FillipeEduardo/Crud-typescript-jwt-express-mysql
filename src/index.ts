import express from 'express';
import 'express-async-errors';
import ErrorMiddleware from './middleware/globalErrorMiddleware';
import userRouter from './routers/user.router';

const PORT = 3301;

const app = express();
app.use(express.json());
app.use(userRouter);

app.use(ErrorMiddleware);

app.listen(PORT, () => {
  console.log(`Server On na porta ${PORT}`);
});