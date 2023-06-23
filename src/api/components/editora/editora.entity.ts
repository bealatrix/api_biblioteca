import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(' Editora')
export class  Editora {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  rede_social!: string;

  @Column()
  nome_fantasia!: string;

  @Column()
  cnpj!: string;

}