import { Controller, Post, Get, Put, Param, Body, UseGuards } from '@nestjs/common';
import { TimesheetService } from './timesheet.service';
import { CreateTimesheetDto } from './dto/create-timesheet.dto';
import { UpdateTimesheetDto } from './dto/update-timesheet.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('timesheets')
export class TimesheetController {
  constructor(private readonly timesheetService: TimesheetService) {}

  @Post('clock-in')
  @UseGuards(JwtAuthGuard) 
  async clockIn(@Body() createDto: CreateTimesheetDto) {
    return this.timesheetService.clockIn(createDto);
  }

  @Put('clock-out/:id')
  @UseGuards(JwtAuthGuard) 
  async clockOut(@Param('id') id: number, @Body() updateDto: UpdateTimesheetDto) {
    return this.timesheetService.clockOut(id, updateDto);
  }

  @Get('work-history/:employeeName')
  @UseGuards(JwtAuthGuard) 
  async getWorkHistory(@Param('employeeName') employeeName: string) {
    return this.timesheetService.getWorkHistory(employeeName);
  }
}
