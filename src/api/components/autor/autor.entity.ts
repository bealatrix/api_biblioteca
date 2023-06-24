import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Livro } from '../livro/livro.entity';


@Entity('autor')
export class Autor {
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

  @OneToOne(() => Livro, livro => livro.autor)
  livros?: Livro;
}
