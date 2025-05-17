import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Timesheet } from './timesheet.entity';
import { CreateTimesheetDto } from './dto/create-timesheet.dto';
import { UpdateTimesheetDto } from './dto/update-timesheet.dto';

@Injectable()
export class TimesheetService {
  constructor(
    @InjectRepository(Timesheet)
    private timesheetRepository: Repository<Timesheet>,
  ) {}

  async clockIn(createDto: CreateTimesheetDto): Promise<Timesheet> {
    try {
      const timesheet = this.timesheetRepository.create({
        employeeName: createDto.employeeName,
        clockIn: new Date(),
      });
      return await this.timesheetRepository.save(timesheet);
    } catch (error) {
      console.error('Error clocking in:', error);
      throw new InternalServerErrorException('Failed to clock in');
    }
  }

  async clockOut(id: number, updateDto: UpdateTimesheetDto): Promise<Timesheet> {
    const timesheet = await this.timesheetRepository.findOne({ where: { id } });
    if (!timesheet) {
      throw new NotFoundException('Timesheet entry not found');
    }

    if (!timesheet.clockIn) {
      throw new InternalServerErrorException('Cannot clock out without clocking in first');
    }

    timesheet.clockOut = new Date();
    const diffInMs = timesheet.clockOut.getTime() - timesheet.clockIn.getTime();
    timesheet.hoursWorked = diffInMs / (1000 * 60 * 60); 

    return await this.timesheetRepository.save(timesheet);
  }

  async getWorkHistory(employeeName: string): Promise<Timesheet[]> {
    try {
      return await this.timesheetRepository.find({
        where: { employeeName },
        order: { date: 'DESC' },
      });
    } catch (error) {
      console.error('Error fetching work history:', error);
      throw new InternalServerErrorException('Failed to fetch work history');
    }
  }
}
