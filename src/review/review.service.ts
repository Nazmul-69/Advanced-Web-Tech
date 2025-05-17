import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}

  async createReview(createDto: CreateReviewDto): Promise<Review> {
    const review = this.reviewRepository.create(createDto);
    return this.reviewRepository.save(review);
  }

  async getReviewById(id: number): Promise<Review> {
    const review = await this.reviewRepository.findOne({ where: { id } });
    if (!review) {
      throw new Error('Review not found');
    }
    return review;
  }

  async updateReview(id: number, updateDto: UpdateReviewDto): Promise<Review> {
    const review = await this.reviewRepository.findOne({ where: { id } });
    if (!review) {
      throw new Error('Review not found');
    }

    review.evaluation = updateDto.evaluation;
    review.goals = updateDto.goals;

    return this.reviewRepository.save(review);
  }
}
