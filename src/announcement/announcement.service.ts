import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Announcement } from './announcement.entity';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';

@Injectable()
export class AnnouncementService {
  constructor(
    @InjectRepository(Announcement)
    private announcementRepository: Repository<Announcement>,
  ) {}

  async createAnnouncement(createDto: CreateAnnouncementDto): Promise<Announcement> {
    try {
      const announcement = this.announcementRepository.create(createDto);
      return await this.announcementRepository.save(announcement);
    } catch (error) {
      console.error('Error creating announcement:', error);
      throw new InternalServerErrorException('Failed to create announcement');
    }
  }

  async getAnnouncementsByDepartment(department: string): Promise<Announcement[]> {
    try {
      return await this.announcementRepository.find({
        where: { department },
        order: { createdAt: 'DESC' },
      });
    } catch (error) {
      console.error('Error fetching announcements:', error);
      throw new InternalServerErrorException('Failed to fetch announcements');
    }
  }

  async getAllAnnouncements(): Promise<Announcement[]> {
    try {
      return await this.announcementRepository.find({
        order: { createdAt: 'DESC' },
      });
    } catch (error) {
      console.error('Error fetching all announcements:', error);
      throw new InternalServerErrorException('Failed to fetch announcements');
    }
  }
}
