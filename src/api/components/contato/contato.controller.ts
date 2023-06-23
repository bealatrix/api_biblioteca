import { Request, Response } from "express";
import { AppDataSource } from "../../../config/database/mysql-datasource.config";
import { Contato } from "./contato.entity";

export class ContatoController {
  public async list(req: Request, res: Response) {
    const contato = await AppDataSource.manager.find(Contato);

    return res.status(200).json({ dados: contato, total: contato.length });
  }

  public async create(req: Request, res: Response) {

    let {
      rede_social,
      email,
      celular,
      telefone,
    } = req.body;

    let cont = new Contato();
    cont.rede_social = rede_social;
    cont.email = email;
    cont.celular = celular;
    cont.telefone = telefone;

    const _cont = await AppDataSource.manager.save(cont);

    return res.status(201).json(_cont);
  }

  public async update(req: Request, res: Response) {
    // const cod = req.params.cod;
    const { cod } = req.params;

    const contato = await AppDataSource.manager.findOneBy(Contato, {
      id: Number(cod),
    });

    if (contato == null) {
      return res.status(404).json({ erro: "Contato não encontrado!" });
    }

    let {
      rede_social,
      email,
      celular,
      telefone,
    } = req.body;

    let cont = new Contato();
    cont.rede_social = rede_social;
    cont.email = email;
    cont.celular = celular;
    cont.telefone = telefone;

    const contato_salvo = await AppDataSource.manager.save(contato);

    return res.json(contato_salvo);
  }

  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const contato = await AppDataSource.manager.findOneBy(Contato, {
      id: Number(cod),
    });

    if (contato == null) {
      return res.status(404).json({ erro: "Contato não encontrado!" });
    }
    
    await AppDataSource.manager.delete(Contato, contato);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response) {
    const { cod } = req.params;

    const contato = await AppDataSource.manager.findOneBy(Contato, {
      id: Number(cod),
    });

    if (contato == null) {
      return res.status(404).json({ erro: "Contato não encontrado!" });
    }

    return res.json(contato);
  }
}