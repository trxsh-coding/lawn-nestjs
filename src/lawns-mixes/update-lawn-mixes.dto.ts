import { PartialType } from '@nestjs/mapped-types';
import { CreateLawnMixesDto } from './create-lawn-mixes.dto';
import { Lawn } from 'src/lawns/lawns.entity';

export class UpdateLawnMixesDto extends PartialType(CreateLawnMixesDto) {
  price?: number;
  seeding?: string;
  picture?: string;
  lawns: Lawn;
}
