import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Livro } from '../livro/livro.entity';

@Entity('autor')
export class Autor extends BaseEntity{
  @PrimaryGeneratedColumn()
  id_autor!: number;

  @Column()
  nome!: string;

  @Column()
  nacionalidade!: string;

  @Column({ name: 'data_nascimento' })
  data_nascimento!: string;

  @Column()
  perfil!: string;

  @OneToMany(() => Livro, livro => livro.editora)
  livros: Livro[];

  constructor() {
    super();
    this.livros = [];
  }
}
