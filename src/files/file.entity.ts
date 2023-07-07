import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum FileFormat {
  IMAGE = 'image',
  VIDEO = 'video',
}

@Entity('file')
export class File {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column({ type: 'enum', enum: FileFormat, default: FileFormat.IMAGE })
  format: FileFormat;
}
