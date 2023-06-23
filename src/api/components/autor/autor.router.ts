import { Router } from 'express';
import { AutorController } from './autor.controller';

export class AutorRoutes {
  private router: Router = Router();

  private controller: AutorController;

  constructor() {
    this.controller = new AutorController();
    this.init();
  }

  private init(): void {
    this.router.get('/', this.controller.list);
    this.router.post('/', this.controller.create);
    this.router.put('/:id', this.controller.update);
    this.router.delete('/:id', this.controller.destroy);
    this.router.get('/:id', this.controller.show);
  }

  public routes(): Router {
    return this.router;
  }
}
