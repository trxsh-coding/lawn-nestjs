import { Lawn } from 'src/lawns/lawns.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('lawnMixes')
export class LawnMixes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  picture: string;

  @Column()
  seeding: string;

  @Column()
  name: string;
  @ManyToOne(() => Lawn)
  @JoinColumn([
    { name: 'percentage', referencedColumnName: 'percentage' },
    { name: 'lawn_id', referencedColumnName: 'lawn_id' },
  ])
  lawns: Lawn;
}
