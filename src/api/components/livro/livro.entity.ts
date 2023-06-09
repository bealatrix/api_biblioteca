import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { Autor } from '../autor/autor.entity';
import { Editora } from '../editora/editora.entity';
import { Emprestimo } from '../emprestimo/emprestimo.entity';

@Entity('livro')
export class Livro extends BaseEntity{
  @PrimaryGeneratedColumn()
  id_livro!: number;

  @Column()
  sinopse!: string;

  @Column()
  isbn!: string;

  @Column()
  titulo!: string;

  @Column()
  quantidade_exemplares!: string;

  @Column()
  ano_publicacao!: Date;

  @Column()
  exemplares_disponivel!: Date;

  constructor() {
    super();
    this.autor = new Autor();
    this.editora = new Editora();
  }

  @ManyToOne(() => Autor, autor => autor.livros)
  autor: Autor;

  @ManyToOne(() => Editora, editora => editora.livros)
  editora: Editora;

  @OneToOne(() => Emprestimo, emprestimo => emprestimo.livro)
  emprestimo?: Emprestimo;
}