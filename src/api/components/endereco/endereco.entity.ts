import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Endereco')
export class Endereco {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  numero!: string;

  @Column()
  bairro!: string;

  @Column()
  cidade!: string;

  @Column()
  estado!: string;

  @Column()
  cep!: string;

  @Column()
  rua!: string;

  @Column()
  pais!: string;

  @Column()
  complemento!: string;
}