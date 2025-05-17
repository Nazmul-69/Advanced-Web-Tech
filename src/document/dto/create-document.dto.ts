import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDocumentDto {
  @IsNotEmpty({ message: 'Title is required' }) // Custom error message
  @IsString({ message: 'Title must be a string' })
  title: string;

  @IsNotEmpty({ message: 'URL is required' }) // Custom error message
  @IsString({ message: 'URL must be a string' })
  url: string;

  @IsNotEmpty({ message: 'Department is required' }) // Custom error message
  @IsString({ message: 'Department must be a string' })
  department: string;
}