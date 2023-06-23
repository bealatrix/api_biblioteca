import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('livro')
export class Livro {
  @PrimaryGeneratedColumn()
  id!: number;

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

}