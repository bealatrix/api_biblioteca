import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { Endereco } from '../endereco/endereco.entity';
import { Contato } from '../contato/contato.entity';
import { Emprestimo } from '../emprestimo/emprestimo.entity';

@Entity('Leitor')
export class Leitor extends BaseEntity{
  @PrimaryGeneratedColumn()
  id_leitor!: number;

  @Column()
  nome!: string;

  @Column()
  cpf!: string;

  @Column()
  rg!: string;

  @Column()
  data_nascimento!: string;

  @Column()
  sexo!: string;

  constructor() {
    super();
    this.endereco = new Endereco();
    this.contato = new Contato();
  }

  @ManyToOne(() => Endereco, endereco => endereco.leitor)
  endereco: Endereco;
  
  @ManyToOne(() => Contato, contato => contato.leitor)
  contato: Contato;

  @OneToOne(() => Emprestimo, emprestimo => emprestimo.leitor)
  emprestimo?: Emprestimo;
}