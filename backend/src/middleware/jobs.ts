import { Request, Response, NextFunction } from 'express';

import * as db from '../db';

export const getJobs = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
	try {
		const jobs = await db.getJobs();
		res.status(200).json(jobs);
	}
	catch (e) {
		next(e);
	}
};