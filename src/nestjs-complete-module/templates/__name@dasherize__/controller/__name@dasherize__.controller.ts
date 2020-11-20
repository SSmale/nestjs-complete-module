import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';
import { I<%= classify(name) %> } from '../models/<%= dasherize(name) %>.model';
import { <%= classify(name) %>Service } from '../service/<%= dasherize(name) %>.service';

@Controller('<%= dasherize(name) %>')
export class <%= classify(name) %>Controller {
    constructor(private readonly <%= dasherize(name) %>Service: <%= classify(name) %>Service) {}

  @Post('')
  create(@Body() <%= dasherize(name) %>: I<%= classify(name) %>): Observable<I<%= classify(name) %>> {
    return this.<%= dasherize(name) %>Service.create(<%= dasherize(name) %>);
  }

  @Get('')
  getAll(): Observable<I<%= classify(name) %>[]> {
    return this.<%= dasherize(name) %>Service.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Observable<I<%= classify(name) %>> {
    return this.<%= dasherize(name) %>Service.getById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() <%= dasherize(name) %>: Partial<I<%= classify(name) %>>,
  ): Observable<UpdateResult> {
    return this.<%= dasherize(name) %>Service.update(id, <%= dasherize(name) %>);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this.<%= dasherize(name) %>Service.delete(id);
  }
}
