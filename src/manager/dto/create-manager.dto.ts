import { IsNotEmpty, IsString } from 'class-validator';

export class CreateManagerDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
