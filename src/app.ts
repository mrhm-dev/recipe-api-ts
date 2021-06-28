import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import NotFound from './error/NotFound';

const app = express();

// middleware
app.use(cors());
app.use(morgan('dev'));

// routes
app.get('/health', (_req: Request, res: Response, next: NextFunction) => {
	return res.status(200).json({
		health: 'OK',
	});
});

// Error handling
app.use((_req: Request, _res: Response, next: NextFunction) => {
	const error = new NotFound('404 Resource Not Found');
	next(error);
});

app.use(
	(
		error: NotFound | Error,
		_req: Request,
		res: Response,
		_next: NextFunction
	) => {
		console.log(error);
		if (error instanceof NotFound && error.status === 404) {
			return res.status(404).json({ error: error.message });
		}
		return res.status(500).json({ error: 'Internal Server Error' });
	}
);

export default app;
