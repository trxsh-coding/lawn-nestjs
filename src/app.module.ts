import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import ormConfig from 'config/orm.config';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfigProd from 'config/orm.config.prod';
import { UserModule } from './users/user.module';
import { LawnModule } from './lawns/lawn.module';
import { LawnMixesModule } from './lawns-mixes/lawn-mixes.module';
import { FileModule } from './files/file.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig],
      expandVariables: true,
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRootAsync({
      useFactory:
        process.env.NODE_ENV !== 'production' ? ormConfig : ormConfigProd,
    }),
    UserModule,
    LawnModule,
    LawnMixesModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
