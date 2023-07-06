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
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('/users')
export class UserController {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}
  private users: User[] = [];
  @Get()
  async findAll() {
    return this.repository.find();
  }

  @Get('getUserById')
  async practice() {
    return this.repository.find({
      where: { id: 3 },
    });
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    const user = await this.repository.findOne(id);
    return user;
  }

  @Post()
  async create(@Body(ValidationPipe) input: CreateUserDto) {
    return await this.repository.save({
      ...input,
    });
  }

  @Patch(':id')
  async update(@Param('id') id, @Body() input: UpdateUserDto) {
    const user = this.repository.findOne(id);
    return {
      ...user,
      ...input,
    };
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id) {
    const user = await this.repository.findOne(id);
    return this.repository.remove(user);
  }
}
