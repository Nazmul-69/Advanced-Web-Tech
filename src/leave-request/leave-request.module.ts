import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaveRequest } from './leave-request.entity';
import { LeaveRequestService } from './leave-request.service';
import { LeaveRequestController } from './leave-request.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LeaveRequest])],
  controllers: [LeaveRequestController],
  providers: [LeaveRequestService],
})
export class LeaveRequestModule {}
