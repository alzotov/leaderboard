// scores.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Score } from './score.entity';
import { ScoreDto } from './score.dto';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(Score)
    private scoresRepository: Repository<Score>,
  ) {}

  create(score: Score): Promise<Score> {
    return this.scoresRepository.save(score);
  }

  async findTopScores(limit: number): Promise<ScoreDto[]> {
    const scores = await this.scoresRepository
      .createQueryBuilder('score')
      .select('score.playerName')
      .addSelect('MAX(score.score)', 'max')
      .groupBy('score.playerName')
      .orderBy('max', 'DESC')
      .limit(limit)
      .getRawMany();

    // Transform raw results to Score objects if necessary
    return scores.map((score) => {
      const result = new ScoreDto();
      result.playerName = score.score_playerName;
      result.value = score.max;
      return result;
    });
  }
}
