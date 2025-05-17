import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Timesheet } from './timesheet.entity';
import { TimesheetService } from './timesheet.service';
import { TimesheetController } from './timesheet.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Timesheet])],
  controllers: [TimesheetController],
  providers: [TimesheetService],
})
export class TimesheetModule {}
