import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Autor } from '../autor/autor.entity';
import { Editora } from '../editora/editora.entity';

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

}