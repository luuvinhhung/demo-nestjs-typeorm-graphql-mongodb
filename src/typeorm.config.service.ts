import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';
import { User } from './user/user.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return {
      type: 'mongodb',
      url: 'mongodb+srv://admin:123@nestjs-7yz1l.mongodb.net/test?retryWrites=true&w=majority',
      // entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
      entities: [User],
      // entities: [__dirname + '/**/*.entity.ts'],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    };
  }
}