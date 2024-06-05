import { Controller, Get, Post, Body, UseGuards, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Ensure the correct import path
import { ScoresService } from './scores.service';
import { Score } from './score.entity';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() score: Score) {
    return this.scoresService.create(score);
  }

  @Get('top')
  findTopScores(@Query('limit') limit: number) {
    return this.scoresService.findTopScores(limit);
  }
}
