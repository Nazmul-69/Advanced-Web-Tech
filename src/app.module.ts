import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagerModule } from './manager/manager.module';
import { EmployeeModule } from './employee/employee.module'; 
import { LeaveRequestModule } from './leave-request/leave-request.module'; 
import { ReviewModule } from './review/review.module'; 
import { DocumentModule } from './document/document.module'; 
import { AnnouncementModule } from './announcement/announcement.module'; 
import { TimesheetModule } from './timesheet/timesheet.module'; 
import { Manager } from './manager/manager.entity';
import { Employee } from './employee/employee.entity'; 
import { LeaveRequest } from './leave-request/leave-request.entity'; 
import { Review } from './review/review.entity'; 
import { Document } from './document/document.entity'; 
import { Announcement } from './announcement/announcement.entity'; 
import { Timesheet } from './timesheet/timesheet.entity'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'new',
      entities: [Manager, Employee, LeaveRequest, Review, Document, Announcement, Timesheet], 
      synchronize: true,
    }),
    ManagerModule,
    EmployeeModule, 
    LeaveRequestModule, 
    ReviewModule, 
    DocumentModule, 
    AnnouncementModule, 
    TimesheetModule, 
  ],
})
export class AppModule {}
