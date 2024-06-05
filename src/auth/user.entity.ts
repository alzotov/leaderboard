import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  username: string;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty()
  @Column({ default: false })
  isAdmin: boolean;
}
