import { Request, Response } from "express";
import { AppDataSource } from "../../../config/database/mysql-datasource.config";
import { Editora } from "./editora.entity";


export class ContatoController {
  public async list(req: Request, res: Response) {
    const editora = await AppDataSource.manager.find(Editora);

    return res.status(200).json({ dados: editora, total: editora.length });
  }

  public async create(req: Request, res: Response) {

    let {
      rede_social,
      nome_fantasia,
      cnpj,
    } = req.body;

    let ed = new Editora();
    ed.rede_social = rede_social;
    ed.nome_fantasia = nome_fantasia;
    ed.cnpj = cnpj;

    const _ed = await AppDataSource.manager.save(ed);

    return res.status(201).json(_ed);
  }

  public async update(req: Request, res: Response) {
    // const cod = req.params.cod;
    const { cod } = req.params;

    const editora = await AppDataSource.manager.findOneBy(Editora, {
      id: Number(cod),
    });

    if (editora == null) {
      return res.status(404).json({ erro: "Editora não encontrado!" });
    }

    let {
      rede_social,
      nome_fantasia,
      cnpj,
    } = req.body;

    let ed = new Editora();
    ed.rede_social = rede_social;
    ed.nome_fantasia = nome_fantasia;
    ed.cnpj = cnpj;

    const editora_salvo = await AppDataSource.manager.save(editora);

    return res.json(editora_salvo);
  }

  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const editora = await AppDataSource.manager.findOneBy(Editora, {
      id: Number(cod),
    });

    if (editora == null) {
      return res.status(404).json({ erro: "Editora não encontrado!" });
    }
    
    await AppDataSource.manager.delete(Editora, editora);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response) {
    const { cod } = req.params;

    const editora = await AppDataSource.manager.findOneBy(Editora, {
      id: Number(cod),
    });

    if (editora == null) {
      return res.status(404).json({ erro: "Editora não encontrado!" });
    }

    return res.json(editora);
  }
}