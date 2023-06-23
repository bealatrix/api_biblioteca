import { Request, Response } from "express";
import { AppDataSource } from "../../../config/database/mysql-datasource.config";
import { Editora } from "./editora.entity";

export class EditoraController {
  public async list(req: Request, res: Response) {
    const editora = await AppDataSource.manager.find(Editora);

    return res.status(200).json({ dados: editora, total: editora.length });
  }

  public async create(req: Request, res: Response) {

    let {
      razao_social,
      nome_fantasia,
      cnpj,
    } = req.body;

    let edi = new Editora();
    edi.razao_social = razao_social;
    edi.nome_fantasia = nome_fantasia;
    edi.cnpj = cnpj;

    const _edi = await AppDataSource.manager.save(edi);

    return res.status(201).json(_edi);
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
      razao_social,
      nome_fantasia,
      cnpj,
    } = req.body;

    editora.razao_social = razao_social;
    editora.nome_fantasia = nome_fantasia;
    editora.cnpj = cnpj;

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
