import { IsInt } from 'class-validator';

export class CreateLawnDto {
  @IsInt()
  readonly price: number;
  readonly picture?: string;
  readonly seeding?: string;
}
