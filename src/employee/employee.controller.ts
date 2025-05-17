import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  @UseGuards(JwtAuthGuard) 
  async getEmployeeDirectory(@Query('search') search: string) {
    return this.employeeService.getEmployeeDirectory(search);
  }
}
