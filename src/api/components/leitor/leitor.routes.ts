import { Router } from 'express';
import { LeitorController } from './leitor.controller';

export class LeitorRoutes {
  private router: Router = Router();

  private controller: LeitorController;

  constructor() {
    this.controller = new LeitorController();
    this.init();
  }

  private init(): void {
    this.router.get('/', this.controller.list);
    this.router.post('/', this.controller.create);
    
    this.router.put('/:cod', this.controller.update);
    this.router.delete('/:cod', this.controller.destroy);
    this.router.get('/:cod', this.controller.show);
  }

  public routes(): Router {
    return this.router;
  }
}