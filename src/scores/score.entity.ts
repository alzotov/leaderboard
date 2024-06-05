import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Score {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  playerName: string;

  @ApiProperty()
  @Column()
  score: number;
}
