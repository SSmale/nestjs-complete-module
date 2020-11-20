import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { I<%= classify(name) %> } from '../models/<%= dasherize(name) %>.model';

@Entity()
export class <%= classify(name) %>Entity implements I<%= classify(name) %> {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}