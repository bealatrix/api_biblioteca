import { Request, Response } from "express";
import { AppDataSource } from "../../../config/database/mysql-datasource.config";
import { Livro } from "./livro.entity";

export class LivroController {
  public async list(req: Request, res: Response) {
    const livros = await AppDataSource.manager.find(Livro);

    return res.status(200).json({ dados: livros, total: livros.length });
  }

  public async create(req: Request, res: Response) {
    //aqui que pegamos o dados para cadastrar uma novo livro

    // let titulo = req.body.titulo;
    // let autor = req.body.autor;
    // let categoria = req.body.categoria;
    // let sinopse = req.body.sinopse;
    // let avaliacao_dos_leitores = req.body.avaliacao_dos_leitores;
    // let data_publicacao = req.body.data_publicacao;

    let {
      titulo,
      autor,
      categoria,
      sinopse,
      avaliacao_dos_leitores,
      data_publicacao,
    } = req.body;

    let liv = new Livro();
    liv.titulo = titulo;
    liv.autor = autor;
    liv.categoria = categoria;
    liv.sinopse = sinopse;
    liv.avaliacao_dos_leitores = avaliacao_dos_leitores;
    liv.data_publicacao = data_publicacao;

    const _liv = await AppDataSource.manager.save(liv);

    return res.status(201).json(_liv);
  }

  public async update(req: Request, res: Response) {
    // const cod = req.params.cod;
    const { cod } = req.params;

    const livro = await AppDataSource.manager.findOneBy(Livro, {
      id: Number(cod),
    });

    if (livro == null) {
      return res.status(404).json({ erro: "Livro não encontrado!" });
    }

    let {
      titulo,
      autor,
      categoria,
      sinopse,
      avaliacao_dos_leitores,
      data_publicacao,
    } = req.body;

    livro.titulo = titulo;
    livro.autor = autor;
    livro.categoria = categoria;
    livro.sinopse = sinopse;
    livro.avaliacao_dos_leitores = avaliacao_dos_leitores;
    livro.data_publicacao = data_publicacao;

    const livro_salvo = await AppDataSource.manager.save(livro);

    return res.json(livro_salvo);
  }

  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const livro = await AppDataSource.manager.findOneBy(Livro, {
      id: Number(cod),
    });

    if (livro == null) {
      return res.status(404).json({ erro: "Livro não encontrado!" });
    }
    
    await AppDataSource.manager.delete(Livro, livro);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response) {
    const { cod } = req.params;

    const livro = await AppDataSource.manager.findOneBy(Livro, {
      id: Number(cod),
    });

    if (livro == null) {
      return res.status(404).json({ erro: "Livro não encontrado!" });
    }

    return res.json(livro);
  }
}
