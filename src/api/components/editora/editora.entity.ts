import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Livro } from '../livro/livro.entity';

@Entity('editora')
export class Editora extends BaseEntity{
  @PrimaryGeneratedColumn()
  id_editora!: number;

  @Column()
  razao_social!: string;

  @Column()
  nome_fantasia!: string;

  @Column()
  cnpj!: string;

  @OneToOne(() => Livro, livro => livro.autor)
  livros?: Livro;
}