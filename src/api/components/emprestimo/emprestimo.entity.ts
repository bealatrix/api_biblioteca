import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('emprestimo')
export class Emprestimo {
  @PrimaryGeneratedColumn()
  id_emprestimo!: number;

  @Column()
  data_hora_emprestimo!: Date ;

  @Column()
  isdata_previsao_entregabn!: Date;

  @Column()
  data_entregue!: Date;

  @Column()
  data_hora_solicitacao!: Date;

}