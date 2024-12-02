import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import Template from './../template.js';
import userRoutes from './routes/user.routes.js';
import contactRoutes from './routes/contact.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();
const CURRENT_WORKING_DIR = process.cwd();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use('/', userRoutes);
app.use('/', contactRoutes);
app.use('/auth', authRoutes);

// Serve static files from the React app
app.use(express.static(path.join(CURRENT_WORKING_DIR, 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(CURRENT_WORKING_DIR, 'client', 'dist', 'index.html'));
});

export default app;
