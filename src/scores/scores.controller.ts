import { Controller, Get, Post, Body, UseGuards, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Ensure the correct import path
import { ScoresService } from './scores.service';
import { Score } from './score.entity';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

@Controller('scores')
@ApiTags('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Submit a new score' })
  @ApiBody({ type: Score })
  @ApiResponse({ status: 201, description: 'Score submitted' })
  @Post()
  create(@Body() score: Score) {
    return this.scoresService.create(score);
  }

  @ApiOperation({ summary: 'Get top scores' })
  @ApiResponse({ status: 200, description: 'Top scores retrieved' })
  @Get('top')
  findTopScores(@Query('limit') limit: number) {
    return this.scoresService.findTopScores(limit);
  }
}
