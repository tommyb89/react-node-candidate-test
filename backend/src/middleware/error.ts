import { Request, Response, NextFunction } from 'express';

export const errorResponse = (err: any, req: Request, res: Response, next: NextFunction) => {
	console.error(err.stack);
	res.status(500).json({
		statusCode: 500,
		error: err.message,
	})
};
