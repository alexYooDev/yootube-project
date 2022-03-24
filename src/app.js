import express from 'express';
import morgan from 'morgan';
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const PORT = 4000;

const app = express();

app.set('view engine', 'pug');
app.set('views', process.cwd() + '/src/views');

const logger = morgan('dev');
app.use(logger);
app.use('/', globalRouter);
app.use('/user', userRouter);
app.use('/video', videoRouter);

const handleListen = () =>
  console.log(`Server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListen);
