import { Router } from 'express';

import { getJobs } from '../../middleware'

export const jobs = Router();
jobs.get(
	'/',
	getJobs
);
