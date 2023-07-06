import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLawnMixesDto } from './create-lawn-mixes.dto';
import { UpdateLawnMixesDto } from './update-lawn-mixes.dto';
import { LawnMixes } from './lawns-mixes.entity';

@Controller('/lawnMixes')
export class LawnsMixesController {
  constructor(
    @InjectRepository(LawnMixes)
    private readonly repository: Repository<LawnMixes>,
  ) {}
  private lawnMixes: LawnMixes[] = [];
  @Get()
  async findAll() {
    return this.repository.find();
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    const lawn = await this.repository.findOne(id);
    return lawn;
  }

  @Post()
  async create(@Body(ValidationPipe) input: CreateLawnMixesDto) {
    return await this.repository.save({ ...input });
  }

  @Patch(':id')
  async update(@Param('id') id, @Body() input: UpdateLawnMixesDto) {
    const lawn = this.repository.findOne(id);
    return {
      ...lawn,
      ...input,
    };
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id) {
    const lawn = await this.repository.findOne(id);
    return this.repository.remove(lawn);
  }
}
