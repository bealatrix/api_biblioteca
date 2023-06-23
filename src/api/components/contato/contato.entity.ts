import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Leitor } from '../leitor/leitor.entity';

@Entity('Contato')
export class Contato extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_contato!: number;

  @Column()
  rede_social!: string;

  @Column()
  email!: string;

  @Column()
  celular!: string;

  @Column()
  telefone!: string;

  @OneToMany(() => Leitor, leitor => leitor.contato)
  leitor: Leitor[];

  constructor() {
    super();
    this.leitor = [];
  }
}