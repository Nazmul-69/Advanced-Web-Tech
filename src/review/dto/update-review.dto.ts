import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateReviewDto {
  @IsNotEmpty({ message: 'Evaluation is required' }) 
  @IsString({ message: 'Evaluation must be a string' })
  evaluation: string;

  @IsNotEmpty({ message: 'Goals are required' }) 
  @IsString({ message: 'Goals must be a string' })
  goals: string;
}