import { Lawn } from 'src/lawns/lawns.entity';
import { Entity, Column } from 'typeorm';

interface Mix {
  readonly percentage: number;
  readonly lawn: Lawn;
}

@Entity('lawnMixes')
export class LawnMixes extends Lawn {
  @Column('jsonb')
  mix: Mix[];
}
