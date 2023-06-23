import { Request, Response } from "express";
import { AppDataSource } from "../../../config/database/mysql-datasource.config";
import { Leitor } from "./leitor.entity";
import { Contato } from "../contato/contato.entity";
import { Endereco } from "../endereco/endereco.entity";

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
      id_contato,
      id_endereco,
    } = req.body;

    let lei = new Leitor();
    lei.nome = nome;
    lei.cpf = cpf;
    lei.rg = rg;
    lei.data_nascimento = data_nascimento;
    lei.sexo = sexo;

    const contato = await AppDataSource.manager.findOne(Contato, id_contato);
    if (!contato) {
      return res.status(404).json({ erro: "Contato não encontrado!" });
    }
    lei.contato = contato;
  
    const endereco = await AppDataSource.manager.findOne(Endereco, id_endereco);
    if (!endereco) {
      return res.status(404).json({ erro: "Endereco não encontrado!" });
    }
    lei.endereco = endereco;

    const _lei = await AppDataSource.manager.save(lei);

    return res.status(201).json(_lei);
  }

  public async update(req: Request, res: Response) {
    // const cod = req.params.cod;
    const { cod } = req.params;

    const leitor = await AppDataSource.manager.findOneBy(Leitor, {
      id_leitor: Number(cod),
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
      contato_id,
      endereco_id,
    } = req.body;

    leitor.nome = nome;
    leitor.cpf = cpf;
    leitor.rg = rg;
    leitor.data_nascimento = data_nascimento;
    leitor.sexo = sexo;

    const contato = await AppDataSource.manager.findOne(Contato, contato_id);
    if (!contato) {
      return res.status(404).json({ erro: "Contato não encontrado!" });
    }
    leitor.contato = contato;
  
    const endereco = await AppDataSource.manager.findOne(Endereco, endereco_id);
    if (!endereco) {
      return res.status(404).json({ erro: "Endereco não encontrado!" });
    }
    leitor.endereco = endereco;

    const leitor_salvo = await AppDataSource.manager.save(leitor);

    return res.json(leitor_salvo);
  }

  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const leitor = await AppDataSource.manager.findOneBy(Leitor, {
      id_leitor: Number(cod),
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
      id_leitor: Number(cod),
    });

    if (leitor == null) {
      return res.status(404).json({ erro: "Leitor não encontrado!" });
    }

    return res.json(leitor);
  }
}
