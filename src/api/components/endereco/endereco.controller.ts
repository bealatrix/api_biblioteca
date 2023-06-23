import { Request, Response } from "express";
import { AppDataSource } from "../../../config/database/mysql-datasource.config";
import { Endereco } from "./endereco.entity";

export class EnderecoController {
  public async list(req: Request, res: Response) {
    const endereco = await AppDataSource.manager.find(Endereco);

    return res.status(200).json({ dados: endereco, total: endereco.length });
  }

  public async create(req: Request, res: Response) {

    let {
      numero,
      bairro,
      cidade,
      estado,
      cep,
      rua,
      pais,
      complemento,
    } = req.body;

    let end = new Endereco();
    end.numero = numero;
    end.bairro = bairro;
    end.cidade = cidade;
    end.estado = estado;
    end.cep = cep;
    end.rua = rua;
    end.pais = pais;
    end.complemento = complemento;

    const _end = await AppDataSource.manager.save(end);

    return res.status(201).json(_end);
  }

  public async update(req: Request, res: Response) {
    // const cod = req.params.cod;
    const { cod } = req.params;

    const endereco = await AppDataSource.manager.findOneBy(Endereco, {
      id_endereco: Number(cod),
    });

    if (endereco == null) {
      return res.status(404).json({ erro: "Endereco não encontrado!" });
    }

    let {
      numero,
      bairro,
      cidade,
      estado,
      cep,
      rua,
      pais,
      complemento,
    } = req.body;

    let end = new Endereco();
    end.numero = numero;
    end.bairro = bairro;
    end.cidade = cidade;
    end.estado = estado;
    end.cep = cep;
    end.rua = rua;
    end.pais = pais;
    end.complemento = complemento;

    const endereco_salvo = await AppDataSource.manager.save(endereco);

    return res.json(endereco_salvo);
  }

  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const endereco = await AppDataSource.manager.findOneBy(Endereco, {
      id_endereco: Number(cod),
    });

    if (endereco == null) {
      return res.status(404).json({ erro: "Endereco não encontrado!" });
    }
    
    await AppDataSource.manager.delete(Endereco, endereco);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response) {
    const { cod } = req.params;

    const endereco = await AppDataSource.manager.findOneBy(Endereco, {
      id_endereco: Number(cod),
    });

    if (endereco == null) {
      return res.status(404).json({ erro: "Endereco não encontrado!" });
    }

    return res.json(endereco);
  }
}
