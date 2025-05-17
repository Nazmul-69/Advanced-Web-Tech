import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLeaveRequestDto {
  @IsNotEmpty({ message: 'Employee name is required' }) 
  @IsString({ message: 'Employee name must be a string' })
  employeeName: string;

  @IsNotEmpty({ message: 'Reason is required' }) 
  @IsString({ message: 'Reason must be a string' })
  reason: string;
}