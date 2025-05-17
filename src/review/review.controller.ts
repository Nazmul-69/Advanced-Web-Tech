import { Controller, Post, Get, Put, Param, Body, UseGuards } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  @UseGuards(JwtAuthGuard) 
  async createReview(@Body() createDto: CreateReviewDto) {
    return this.reviewService.createReview(createDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard) 
  async getReviewById(@Param('id') id: number) {
    return this.reviewService.getReviewById(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard) 
  async updateReview(
    @Param('id') id: number,
    @Body() updateDto: UpdateReviewDto,
  ) {
    return this.reviewService.updateReview(id, updateDto);
  }
}
