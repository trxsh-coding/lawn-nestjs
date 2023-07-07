import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { File } from './file.entity';
import { FilesService } from './file.service';
@Controller('files')
export class FilesController {
  constructor(
    @InjectRepository(File)
    private readonly repository: Repository<File>,
    private readonly fileService: FilesService,
  ) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    this.fileService.upload(file);
    return {
      statusCode: 200,
    };
  }

  @Get('list')
  getFiles() {
    const list = this.fileService.getFilesList();
    return {
      statusCode: 200,
      items: list,
    };
  }
}
