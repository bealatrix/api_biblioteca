import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/database/mysql-datasource.config';
import { Repository } from 'typeorm';
import { Leitor } from './leitor.entity';


export class LeitorController {
  private readonly repository: Repository<Leitor>;

  constructor() {
    this.repository = AppDataSource.getRepository(Leitor);
    // console.log(this.repository);
  }

  public async list(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Leitor);

    // console.log(repo);

    const leitor = await repo.find();

    res.status(200).json({ data: leitor });
  }
}
