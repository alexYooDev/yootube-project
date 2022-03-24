import express from 'express';

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send('I am a developer');
};

const logger = (req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
};

const handleLogin = (req, res) => {
  return res.send('Login here');
};

app.use(logger);
app.get('/', handleHome);
app.get('/login', handleLogin);

const handleListen = () =>
  console.log(`Server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListen);
