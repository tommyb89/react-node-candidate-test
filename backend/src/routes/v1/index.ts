import { Router } from 'express';

import { jobs } from './jobs';

export const v1 = Router();

v1.use('/jobs', jobs);
