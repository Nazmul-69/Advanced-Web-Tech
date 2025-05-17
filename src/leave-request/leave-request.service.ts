import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LeaveRequest } from './leave-request.entity';
import { CreateLeaveRequestDto } from './dto/create-leave-request.dto';
import { UpdateLeaveRequestDto } from './dto/update-leave-request.dto';

@Injectable()
export class LeaveRequestService {
  constructor(
    @InjectRepository(LeaveRequest)
    private leaveRequestRepository: Repository<LeaveRequest>,
  ) {}

  async createLeaveRequest(createDto: CreateLeaveRequestDto): Promise<LeaveRequest> {
    const leaveRequest = this.leaveRequestRepository.create(createDto);
    return this.leaveRequestRepository.save(leaveRequest);
  }

  async approveLeaveRequest(id: number, updateDto: UpdateLeaveRequestDto): Promise<LeaveRequest> {
    const leaveRequest = await this.leaveRequestRepository.findOne({ where: { id } });
    if (!leaveRequest) {
      throw new Error('Leave request not found');
    }

    leaveRequest.status = 'Approved'; 
    leaveRequest.managerComment = updateDto.managerComment;

    return this.leaveRequestRepository.save(leaveRequest);
  }

  async rejectLeaveRequest(id: number, updateDto: UpdateLeaveRequestDto): Promise<LeaveRequest> {
    const leaveRequest = await this.leaveRequestRepository.findOne({ where: { id } });
    if (!leaveRequest) {
      throw new Error('Leave request not found');
    }

    leaveRequest.status = 'Rejected'; 
    leaveRequest.managerComment = updateDto.managerComment;

    return this.leaveRequestRepository.save(leaveRequest);
  }
}
