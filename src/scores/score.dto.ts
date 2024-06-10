import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min } from 'class-validator';

export class ScoreDto {
  @ApiProperty({ description: 'Name of the player' })
  @IsString()
  playerName: string;

  @ApiProperty({ description: 'Score value' })
  @IsInt()
  @Min(0)
  value: number;
}
