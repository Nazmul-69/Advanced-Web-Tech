import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateTimesheetDto {
  @IsOptional()
  @IsNumber({}, { message: 'Hours worked must be a number' })
  hoursWorked?: number;
}