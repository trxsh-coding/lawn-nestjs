import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LawnsMixesController } from './lawn-mixes.controller';
import { LawnMixes } from './lawns-mixes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LawnMixes])],
  controllers: [LawnsMixesController],
})
export class LawnMixesModule {}
