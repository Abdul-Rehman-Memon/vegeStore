import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

export const database: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: () => {
    let config: TypeOrmModuleOptions;
    config = {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'vegeStore',
      // synchronize: true,
      logging: true,
      entities: [__dirname + './../../models/**/*.entity{.ts,.js}'],
      // ''
    };

    // type: 'mysql',
    // host: 'localhost',
    // port: 3306,
    // username: 'root',
    // password: '',
    // database: 'vegeStore',
    // synchronize: true,
    // logging: true,

    return config;
  },
};
