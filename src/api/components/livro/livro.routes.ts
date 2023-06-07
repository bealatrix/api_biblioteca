import { Router } from 'express';
import { LivroController } from './livro.controller';

export class LivroRoutes {
  private router: Router = Router();

  private controller: LivroController;

  constructor() {
    this.controller = new LivroController();
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