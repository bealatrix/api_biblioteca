import { Router } from 'express';
import { BaseController } from './base.controller';

export class BaseRoutes {
  private router: Router = Router();

  private readonly controller: BaseController;

  constructor() {
    this.controller = new BaseController();
    this.init();
  }

  private init(): void {
    this.router.get('/', this.controller.index);
    this.router.get('/info', this.controller.info);
  }

  public routes(): Router {
    return this.router;
  }
}