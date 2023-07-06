import { IsInt } from 'class-validator';
import { Lawn } from 'src/lawns/lawns.entity';

export class CreateLawnMixesDto {
  @IsInt()
  price: number;
  picture?: string;
  seeding: string;
  lawns: Lawn;
}
