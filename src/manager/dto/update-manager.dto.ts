import { IsOptional, IsString } from 'class-validator';

export class UpdateManagerDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  password?: string;
}
