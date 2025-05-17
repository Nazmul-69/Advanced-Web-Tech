import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTimesheetDto {
  @IsNotEmpty({ message: 'Employee name is required' })
  @IsString({ message: 'Employee name must be a string' })
  employeeName: string;
}