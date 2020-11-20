import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult } from 'typeorm';
import { I<%= classify(name) %> } from '../models/<%= dasherize(name) %>.model';
import { <%= classify(name) %>Entity } from '../models/<%= dasherize(name) %>.entity';

@Injectable()
export class <%= classify(name) %>Service {
  constructor(
    @InjectRepository(<%= classify(name) %>Entity)
    private readonly <%= dasherize(name) %>Repo: Repository<<%= classify(name) %>Entity>,
  ) {}

  create(<%= dasherize(name) %>: I<%= classify(name) %>): Observable<I<%= classify(name) %>> {
    return from(this.<%= dasherize(name) %>Repo.save(<%= dasherize(name) %>));
  }

  getAll(): Observable<I<%= classify(name) %>[]> {
    return from(this.<%= dasherize(name) %>Repo.find());
  }

  update(
    id: string,
    <%= dasherize(name) %>: Partial<I<%= classify(name) %>>,
  ): Observable<UpdateResult> {
    return from(this.<%= dasherize(name) %>Repo.update(id, <%= dasherize(name) %>));
  }

  delete(id: string): Observable<any> {
    return from(this.<%= dasherize(name) %>Repo.delete(id));
  }

  getById(id: string): Observable<I<%= classify(name) %>> {
    return from(this.<%= dasherize(name) %>Repo.findOne({ id }));
  }
}
