import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class OrmConfig implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    // console.log(this.configService.get('TEST'));
    console.log(__dirname);
    return {
      type: 'mysql',
      host: this.configService.get<string>('DATABASE_HOST'),
      port: this.configService.get<number>('DATABASE_PORT'),
      username: this.configService.get<string>('DATABASE_USERNAME'),
      password: this.configService.get<string>('DATABASE_PASSWORD'),
      database: this.configService.get<string>('DATABASE_NAME'),
      synchronize: this.configService.get<boolean>('DATABASE_SYNCHRONIZE'), // 연결될때 데이터베이스 초기화됨
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/../**/migrations/*.js'],
      migrationsTableName: 'migrations',
      logging: true,
    };
  }
}
