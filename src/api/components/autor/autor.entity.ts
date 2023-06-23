import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('autor')
export class Autor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  nacionalidade!: string;

  @Column({ name: 'data_nascimento' })
  data_nascimento!: string;

  @Column()
  perfil!: string;
}
