import { Request, Response } from "express";
import { AppDataSource } from "../../../config/database/mysql-datasource.config";
import { Leitor } from "./leitor.entity";
import { Livro } from "../livro/livro.entity";

export class LeitorController {
  public async list(req: Request, res: Response) {
    const leitor = await AppDataSource.manager.find(Leitor);

    return res.status(200).json({ dados: leitor, total: leitor.length });
  }

  public async create(req: Request, res: Response) {

    let {
      nome,
      cpf,
      rg,
      data_nascimento,
      sexo,
    } = req.body;

    let lei = new Leitor();
    lei.nome = nome;
    lei.cpf = cpf;
    lei.rg = rg;
    lei.data_nascimento = data_nascimento;
    lei.sexo = sexo;

    const _lei = await AppDataSource.manager.save(lei);

    return res.status(201).json(_lei);
  }

  public async update(req: Request, res: Response) {
    // const cod = req.params.cod;
    const { cod } = req.params;

    const leitor = await AppDataSource.manager.findOneBy(Leitor, {
      id: Number(cod),
    });

    if (leitor == null) {
      return res.status(404).json({ erro: "Leitor não encontrado!" });
    }

    let {
      nome,
      cpf,
      rg,
      data_nascimento,
      sexo,
    } = req.body;

    let lei = new Leitor();
    lei.nome = nome;
    lei.cpf = cpf;
    lei.rg = rg;
    lei.data_nascimento = data_nascimento;
    lei.sexo = sexo;

    const leitor_salvo = await AppDataSource.manager.save(leitor);

    return res.json(leitor_salvo);
  }

  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const leitor = await AppDataSource.manager.findOneBy(Leitor, {
      id: Number(cod),
    });

    if (leitor == null) {
      return res.status(404).json({ erro: "Leitor não encontrado!" });
    }
    
    await AppDataSource.manager.delete(Leitor, leitor);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response) {
    const { cod } = req.params;

    const leitor = await AppDataSource.manager.findOneBy(Leitor, {
      id: Number(cod),
    });

    if (leitor == null) {
      return res.status(404).json({ erro: "Leitor não encontrado!" });
    }

    return res.json(leitor);
  }
}
