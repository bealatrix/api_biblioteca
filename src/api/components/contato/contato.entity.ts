import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Contato')
export class Contato {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  rede_social!: string;

  @Column()
  email!: string;

  @Column()
  celular!: string;

  @Column()
  telefone!: string;
}