import { Controller, Post, Put, Param, Body, UseGuards } from '@nestjs/common';
import { LeaveRequestService } from './leave-request.service';
import { CreateLeaveRequestDto } from './dto/create-leave-request.dto';
import { UpdateLeaveRequestDto } from './dto/update-leave-request.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('leave-requests')
export class LeaveRequestController {
  constructor(private readonly leaveRequestService: LeaveRequestService) {}

  @Post()
  @UseGuards(JwtAuthGuard) 
  async createLeaveRequest(@Body() createDto: CreateLeaveRequestDto) {
    return this.leaveRequestService.createLeaveRequest(createDto);
  }

  @Put('approve/:id')
  @UseGuards(JwtAuthGuard) 
  async approveLeaveRequest(
    @Param('id') id: number,
    @Body() updateDto: UpdateLeaveRequestDto,
  ) {
    return this.leaveRequestService.approveLeaveRequest(id, updateDto);
  }

  @Put('reject/:id')
  @UseGuards(JwtAuthGuard) 
  async rejectLeaveRequest(
    @Param('id') id: number,
    @Body() updateDto: UpdateLeaveRequestDto,
  ) {
    return this.leaveRequestService.rejectLeaveRequest(id, updateDto);
  }
}
