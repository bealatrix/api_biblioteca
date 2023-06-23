import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToOne  } from 'typeorm';
import { Leitor } from '../leitor/leitor.entity';

@Entity('Endereco')
export class Endereco extends BaseEntity{
  @PrimaryGeneratedColumn()
  id_endereco!: number;

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

  @OneToOne(() => Leitor, leitor => leitor.endereco)
  leitor?: Leitor;

}