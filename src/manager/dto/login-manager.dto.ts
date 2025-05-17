import { IsNotEmpty, IsString } from 'class-validator';

export class LoginManagerDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
