import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Leitor } from '../leitor/leitor.entity';

@Entity('Contato')
export class Contato {
  @PrimaryGeneratedColumn()
  id_contato!: number;

  @Column()
  rede_social!: string;

  @Column()
  email!: string;

  @Column()
  celular!: string;

  @Column()
  telefone!: string;

  @OneToOne(() => Leitor, leitor => leitor.contato)
  leitor?: Leitor;

}