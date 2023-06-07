import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('livro')
export class Livro {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  titulo!: string;

  @Column()
  autor!: string;

  @Column()
  categoria!: string;

  @Column()
  sinopse!: string;

  @Column()
  avaliacao_dos_leitores!: string;

  @Column()
  data_publicacao!: Date;

}