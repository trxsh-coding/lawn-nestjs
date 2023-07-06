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
import { Lawn } from './lawns.entity';
import { CreateLawnDto } from './create-lawn.dto';
import { UpdateLawnDto } from './update-lawn.dto';

@Controller('/lawns')
export class LawnsController {
  constructor(
    @InjectRepository(Lawn)
    private readonly repository: Repository<Lawn>,
  ) {}
  private lawns: Lawn[] = [];
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
  async create(@Body(ValidationPipe) input: CreateLawnDto) {
    return await this.repository.save({
      ...input,
    });
  }

  @Patch(':id')
  async update(@Param('id') id, @Body() input: UpdateLawnDto) {
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
