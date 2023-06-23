import { Request, Response } from "express";
import { AppDataSource } from "../../../config/database/mysql-datasource.config";
import { Autor } from "./autor.entity";

export class AutorController {
  public async list(req: Request, res: Response) {
    const autor = await AppDataSource.manager.find(Autor);

    return res.status(200).json({ dados: autor, total: autor.length });
  }

  public async create(req: Request, res: Response) {

    let {
      nome,
      nacionalidade,
      data_nascimento,
      perfil,
    } = req.body;

    let aut = new Autor();
    aut.nome = nome;
    aut.nacionalidade = nacionalidade;
    aut.data_nascimento = data_nascimento;
    aut.perfil = perfil;

    const _aut = await AppDataSource.manager.save(aut);

    return res.status(201).json(_aut);
  }

  public async update(req: Request, res: Response) {
    // const cod = req.params.cod;
    const { cod } = req.params;

    const autor = await AppDataSource.manager.findOne(Autor, {
      where: {
        id_autor: Number(cod),
      },
    });
    
    if (autor == null) {
      return res.status(404).json({ erro: "Autor não encontrado!" });
    }

    let {
      nome,
      nacionalidade,
      data_nascimento,
      perfil,
    } = req.body;

    autor.nome = nome;
    autor.nacionalidade = nacionalidade;
    autor.data_nascimento = data_nascimento;
    autor.perfil = perfil;

    await AppDataSource.manager.save(autor);
    return res.json(autor);
  }

  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const autor = await AppDataSource.manager.findOneBy(Autor, {
      id_autor: Number(cod),
    });

    if (autor == null) {
      return res.status(404).json({ erro: "Autor não encontrado!" });
    }
    
    await AppDataSource.manager.delete(Autor, autor);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response) {
    const { cod } = req.params;

    const autor = await AppDataSource.manager.findOneBy(Autor, {
      id_autor: Number(cod),
    });

    if (autor == null) {
      return res.status(404).json({ erro: "Autor não encontrado!" });
    }

    return res.json(autor);
  }
}
