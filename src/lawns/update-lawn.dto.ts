import { PartialType } from '@nestjs/mapped-types';
import { CreateLawnDto } from './create-lawn.dto';

export class UpdateLawnDto extends PartialType(CreateLawnDto) {
  price?: number;
  seeding?: string;
  picture?: string;
}
