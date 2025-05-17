import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAnnouncementDto {
  @IsNotEmpty({ message: 'Title is required' })
  @IsString({ message: 'Title must be a string' })
  title: string;

  @IsNotEmpty({ message: 'Content is required' })
  @IsString({ message: 'Content must be a string' })
  content: string;

  @IsNotEmpty({ message: 'Department is required' })
  @IsString({ message: 'Department must be a string' })
  department: string;
}