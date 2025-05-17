import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateLeaveRequestDto {
  @IsNotEmpty({ message: 'Manager comment is required' }) 
  @IsString({ message: 'Manager comment must be a string' })
  managerComment: string; 
}