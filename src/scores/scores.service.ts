// scores.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Score } from './score.entity';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(Score)
    private scoresRepository: Repository<Score>,
  ) {}

  create(score: Score): Promise<Score> {
    return this.scoresRepository.save(score);
  }

  async findTopScores(limit: number): Promise<Score[]> {
    return this.scoresRepository.find({
      order: { score: 'DESC' },
      take: limit,
    });
  }
}
