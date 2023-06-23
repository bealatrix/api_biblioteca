import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Leitor')
export class Leitor {
  @PrimaryGeneratedColumn()
  id!: number;

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