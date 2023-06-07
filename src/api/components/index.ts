import { Router } from 'express';
import { LeitorRoutes } from './leitor/leitor.routes';
import { BaseRoutes } from './base/base.routes';
import { LivroRoutes } from './livro/livro.routes';

/**
 * Init component routes
 *
 * @param {Router} router
 * @param {string} prefix
 * @returns {void}
 */
export function registerRoutes(router: Router, prefix: string = ''): void {
  router.use(`${prefix}`, new BaseRoutes().routes());
  router.use(`${prefix}/leitor`, new LeitorRoutes().routes());
  router.use(`${prefix}/livro`, new LivroRoutes().routes());
}