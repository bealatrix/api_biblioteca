import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Endereco } from '../endereco/endereco.entity';
import { Contato } from '../contato/contato.entity';

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

  @ManyToOne(() => Endereco, endereco => endereco.leitor)
  endereco: Endereco;
  
  @ManyToOne(() => Contato, contato => contato.leitor)
  contato: Contato;

  constructor() {
    super();
    this.endereco = new Endereco();
    this.contato = new Contato();
  }
}