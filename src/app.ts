import express, { Application } from 'express';
import logger from 'morgan';
import { initRoutes } from './api/routes';
import { AppDataSource } from './config/database/mysql-datasource.config';


export class App {
  private app: Application;

  private port: string | number;

  constructor(port: string | number) {
    this.app = express();

    this.port = port;

    this.middleware();
    this.database();
    this.routes();
  }

  private middleware(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(logger('combined'));

    // CORS é uma medida de segurança importante para proteger os recursos de um servidor contra solicitações maliciosas de outros domínios.
    this.app.use(function (req: any, res: any, next: any) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, HEAD, POST, PUT, DELETE, PATCH, OPTIONS'
      );
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization'
      );
      next();
    });
  }

  private routes(): void {
    initRoutes(this.app);
  }

  private async database(): Promise<void> {
    await AppDataSource.initialize();
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`🏃 Server is running in :${this.port}`); // eslint-disable-line no-console
    });
  }
}
