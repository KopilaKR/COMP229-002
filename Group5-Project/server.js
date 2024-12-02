import dotenv from 'dotenv';
dotenv.config();

import config from './config/config.js';
import app from './server/express.js';
import mongoose from 'mongoose';
import path from 'path';
const __dirname = path.resolve();

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri)
  .then(() => console.log("Connected to the database!"))
  .catch((error) => console.error(`Unable to connect to database: ${error.message}`));

mongoose.connection.on('error', () => {
  throw new Error(`Unable to connect to database: ${config.mongoUri}`);
});

app.get("/", (req, res) => {
  res.json({ message: "COMP229-002 GROUP5 Backend" });
});

app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('Server started on port %s.', config.port);
});
