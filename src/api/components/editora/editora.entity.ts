import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('editora')
export class Editora {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  razao_social!: string;

  @Column()
  nome_fantasia!: string;

  @Column()
  cnpj!: string;

}