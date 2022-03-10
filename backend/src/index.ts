import express, {Application} from 'express';
import bodyParser from 'body-parser';

import { api } from './routes'
import { errorResponse } from './middleware/error';

const app: Application = express();
const port = 5002;

app.use(bodyParser.json({ limit: '5MB' }));
app.use(require('morgan')('dev'));

app.use('/api', api);
app.use(errorResponse);

app.listen(port, () => console.log(`Backend server running on port ${port} and accessible on http://localhost:5002/api/v1/jobs`));
