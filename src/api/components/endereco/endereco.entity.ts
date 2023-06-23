import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Leitor } from '../leitor/leitor.entity';

@Entity('Endereco')
export class Endereco extends BaseEntity{
  @PrimaryGeneratedColumn()
  id_endereco!: number;

  @Column()
  numero!: string;

  @Column()
  bairro!: string;

  @Column()
  cidade!: string;

  @Column()
  estado!: string;

  @Column()
  cep!: string;

  @Column()
  rua!: string;

  @Column()
  pais!: string;

  @Column()
  complemento!: string;

  @OneToMany(() => Leitor, leitor => leitor.endereco)
  leitor: Leitor[];

  constructor() {
    super();
    this.leitor = [];
  }
}