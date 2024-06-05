import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const log = `${req.ip} - ${req.method} - ${req.originalUrl} - ${res.statusCode}`;
    fs.appendFileSync(path.join(__dirname, 'requests.log'), log + '\n');
    next();
  }
}
