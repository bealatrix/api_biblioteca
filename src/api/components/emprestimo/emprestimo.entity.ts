import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Leitor } from '../leitor/leitor.entity';
import { Livro } from '../livro/livro.entity';

@Entity('emprestimo')
export class Emprestimo extends BaseEntity{
  @PrimaryGeneratedColumn()
  id_emprestimo!: number;

  @Column()
  data_hora_emprestimo!: Date ;

  @Column()
  isdata_previsao_entregabn!: Date;

  @Column()
  data_entregue!: Date;

  @Column()
  data_hora_solicitacao!: Date;

  constructor() {
    super();
    this.leitor = new Leitor();
    this.livro = new Livro();
  }
  @ManyToOne(() => Leitor, leitor => leitor.emprestimo)
  leitor: Leitor;
  
  @ManyToOne(() => Livro, livro => livro.emprestimo)
  livro: Livro;


}