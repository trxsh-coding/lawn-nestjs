import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('lawns')
export class Lawn {
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
}
