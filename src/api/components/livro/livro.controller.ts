import { Request, Response } from "express";
import { AppDataSource } from "../../../config/database/mysql-datasource.config";
import { Livro } from "./livro.entity";
import { Autor } from "../autor/autor.entity";
import { Editora } from "../editora/editora.entity";

export class LivroController {
  
  public async list(req: Request, res: Response) {
    const livros = await AppDataSource.manager.find(Livro);

    return res.status(200).json({ dados: livros, total: livros.length });
  }

  public async create(req: Request, res: Response) {

    let {
      sinopse,
      isbn,
      titulo,
      quantidade_exemplares,
      ano_publicacao,
      exemplares_disponivel,
      id_autor,
      id_editora,
    } = req.body;

    let liv = new Livro();
    liv.sinopse = sinopse;
    liv.isbn = isbn;
    liv.titulo = titulo;
    liv.quantidade_exemplares = quantidade_exemplares;
    liv.ano_publicacao = ano_publicacao;
    liv.exemplares_disponivel = exemplares_disponivel;

    const autor = await AppDataSource.manager.findOne(Autor, id_autor);
    if (!autor) {
      return res.status(404).json({ erro: "Autor não encontrado!" });
    }
    liv.autor = autor;
  
    const editora = await AppDataSource.manager.findOne(Editora, id_editora);
    if (!editora) {
      return res.status(404).json({ erro: "Editora não encontrada!" });
    }
    liv.editora = editora;

    const _liv = await AppDataSource.manager.save(liv);

    return res.status(201).json(_liv);
  }

  public async update(req: Request, res: Response) {
    // const cod = req.params.cod;
    const { cod } = req.params;

    const livro = await AppDataSource.manager.findOneBy(Livro, {
      id_livro: Number(cod),
    });

    if (livro == null) {
      return res.status(404).json({ erro: "Livro não encontrado!" });
    }

    let {
      sinopse,
      isbn,
      titulo,
      quantidade_exemplares,
      ano_publicacao,
      exemplares_disponivel,
      id_autor,
      id_editora,
    } = req.body;

    livro.sinopse = sinopse;
    livro.isbn = isbn;
    livro.titulo = titulo;
    livro.quantidade_exemplares = quantidade_exemplares;
    livro.ano_publicacao = ano_publicacao;
    livro.exemplares_disponivel = exemplares_disponivel;
    
    const autor = await AppDataSource.manager.findOne(Autor, id_autor);
    if (!autor) {
      return res.status(404).json({ erro: "Autor não encontrado!" });
    }
    livro.autor = autor;
  
    const editora = await AppDataSource.manager.findOne(Editora, id_editora);
    if (!editora) {
      return res.status(404).json({ erro: "Editora não encontrada!" });
    }
    livro.editora = editora;
    const livro_salvo = await AppDataSource.manager.save(livro);

    return res.json(livro_salvo);
  }

  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const livro = await AppDataSource.manager.findOneBy(Livro, {
      id_livro: Number(cod),
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
      id_livro: Number(cod),
    });

    if (livro == null) {
      return res.status(404).json({ erro: "Livro não encontrado!" });
    }

    return res.json(livro);
  }
}
