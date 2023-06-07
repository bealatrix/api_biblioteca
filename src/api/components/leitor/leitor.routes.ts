import { Router } from 'express';
import { LeitorController } from './leitor.controller';

export class LeitorRoutes {
  private router: Router = Router();

  private readonly controller: LeitorController;

  constructor() {
    this.controller = new LeitorController();
    this.init();
  }

  private init(): void {
    this.router.get('/', this.controller.list);
  }

  public routes(): Router {
    return this.router;
  }
}