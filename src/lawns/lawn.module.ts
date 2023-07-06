import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LawnsController } from './lawn.controller';
import { Lawn } from './lawns.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lawn])],
  controllers: [LawnsController],
})
export class LawnModule {}
