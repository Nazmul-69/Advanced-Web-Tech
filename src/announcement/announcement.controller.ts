import { Controller, Post, Get, Param, Body, UseGuards } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('announcements')
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Post()
  @UseGuards(JwtAuthGuard) 
  async createAnnouncement(@Body() createDto: CreateAnnouncementDto) {
    return this.announcementService.createAnnouncement(createDto);
  }

  @Get('department/:department')
  @UseGuards(JwtAuthGuard) 
  async getAnnouncementsByDepartment(@Param('department') department: string) {
    return this.announcementService.getAnnouncementsByDepartment(department);
  }

  @Get()
  @UseGuards(JwtAuthGuard) 
  async getAllAnnouncements() {
    return this.announcementService.getAllAnnouncements();
  }
}
