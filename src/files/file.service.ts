import { Injectable } from '@nestjs/common';
import { File } from './file.entity';
import { default as EasyYandexS3 } from 'easy-yandex-s3';

@Injectable()
export class FilesService {
  private readonly files: File[] = [];

  public readonly S3 = new EasyYandexS3({
    auth: {
      accessKeyId: process.env.YANDEX_ID_KEY,
      secretAccessKey: process.env.YANDEX_ID_SECRET,
    },
    Bucket: process.env.BUCKET_NAME,
    debug: true,
  });

  async upload(file: Express.Multer.File) {
    console.log(process.env.BUCKET_NAME);
    const upload = await this.S3.Upload(file, '/test/');
  }
  async getFilesList() {
    const { Contents: contents } = (await this.S3.GetList('/test/')) as any;
    return contents;
  }
}
