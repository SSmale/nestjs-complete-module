import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { <%= classify(name) %>Entity } from './models/<%= dasherize(name) %>.entity';
import { <%= classify(name) %>Controller } from './controller/<%= dasherize(name) %>.controller';
import { <%= classify(name) %>Service } from './service/<%= dasherize(name) %>.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([<%= classify(name) %>Entity]),
  ],
  providers: [<%= classify(name) %>Service],
  controllers: [<%= classify(name) %>Controller],
  exports: [<%= classify(name) %>Service],
})
export class <%= classify(name) %>Module {}
