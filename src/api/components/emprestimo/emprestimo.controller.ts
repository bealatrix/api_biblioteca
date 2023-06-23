import { Request, Response } from "express";
import { AppDataSource } from "../../../config/database/mysql-datasource.config";
import { Emprestimo } from "./emprestimo.entity";
import { Leitor } from "../leitor/leitor.entity";
import { Livro } from "../livro/livro.entity";

export class EmprestimoController {
  public async list(req: Request, res: Response) {
    const emprestimo = await AppDataSource.manager.find(Emprestimo);

    return res.status(200).json({ dados: emprestimo, total: emprestimo.length });
  }

  public async create(req: Request, res: Response) {

    let {
      data_hora_emprestimo,
      data_previsao_entrega,
      data_entregue,
      data_hora_solicitacao,
      leitor_id,
      livro_id,
    } = req.body;

    let emp = new Emprestimo ();
    emp.data_hora_emprestimo = data_hora_emprestimo;
    emp.data_previsao_entrega = data_previsao_entrega;
    emp.data_entregue = data_entregue;
    emp.data_hora_solicitacao = data_hora_solicitacao;

    const leitor = await AppDataSource.manager.findOne(Leitor, leitor_id);
    if (!leitor) {
      return res.status(404).json({ erro: "Leitor não encontrado!" });
    }
    emp.leitor = leitor;
  
    const livro = await AppDataSource.manager.findOne(Livro, livro_id);
    if (!livro) {
      return res.status(404).json({ erro: "Livro não encontrado!" });
    }
    emp.livro = livro;

    const _emp = await AppDataSource.manager.save(emp);

    return res.status(201).json(_emp);
  }

  public async update(req: Request, res: Response) {
    // const cod = req.params.cod;
    const { cod } = req.params;

    const emprestimo = await AppDataSource.manager.findOneBy(Emprestimo, {
      id_emprestimo: Number(cod),
    });

    if (emprestimo == null) {
      return res.status(404).json({ erro: "Emprestimo não encontrado!" });
    }

    let {
      data_hora_emprestimo,
      data_previsao_entrega,
      data_entregue,
      data_hora_solicitacao,
      leitor_id,
      livro_id,
    } = req.body;

    emprestimo.data_hora_emprestimo = data_hora_emprestimo;
    emprestimo.data_previsao_entrega = data_previsao_entrega;
    emprestimo.data_entregue = data_entregue;
    emprestimo.data_hora_solicitacao = data_hora_solicitacao;

    const leitor = await AppDataSource.manager.findOne(Leitor, leitor_id);
    if (!leitor) {
      return res.status(404).json({ erro: "Leitor não encontrado!" });
    }
    emprestimo.leitor = leitor;
  
    const livro = await AppDataSource.manager.findOne(Livro, livro_id);
    if (!livro) {
      return res.status(404).json({ erro: "Livro não encontrado!" });
    }
    emprestimo.livro = livro;

    const emprestimo_salvo = await AppDataSource.manager.save(emprestimo);

    return res.json(emprestimo_salvo);
  }

  public async destroy(req: Request, res: Response) {
    const { cod } = req.params;

    const emprestimo = await AppDataSource.manager.findOneBy(Emprestimo, {
      id_emprestimo: Number(cod),
    });

    if (emprestimo == null) {
      return res.status(404).json({ erro: "Emprestimo não encontrado!" });
    }
    
    await AppDataSource.manager.delete(Emprestimo, emprestimo);

    return res.status(204).json();
  }

  public async show(req: Request, res: Response) {
    const { cod } = req.params;

    const emprestimo = await AppDataSource.manager.findOneBy(Emprestimo, {
      id_emprestimo: Number(cod),
    });

    if (emprestimo == null) {
      return res.status(404).json({ erro: "Emprestimo não encontrado!" });
    }

    return res.json(emprestimo);
  }
}
