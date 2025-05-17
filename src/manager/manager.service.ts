import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Manager } from './manager.entity';
import { Repository } from 'typeorm';
import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ManagerService {
  constructor(
    @InjectRepository(Manager)
    private managerRepository: Repository<Manager>,
    private jwtService: JwtService, 
  ) {}

  async register(createDto: CreateManagerDto): Promise<Manager> {
    const manager = this.managerRepository.create(createDto);
    return this.managerRepository.save(manager);
  }

  async login(username: string, password: string): Promise<{ accessToken: string } | null> {
    const manager = await this.managerRepository.findOne({ where: { username } });
    if (manager && manager.password === password) {
      const payload = { username: manager.username, sub: manager.id };
      const accessToken = this.jwtService.sign(payload); 
      return { accessToken };
    }
    return null;
  }

  async findAll(): Promise<Manager[]> {
    return this.managerRepository.find();
  }

  async findOne(id: number): Promise<Manager | null> {
    return this.managerRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDto: UpdateManagerDto): Promise<Manager> {
    const manager = await this.findOne(id);
    if (!manager) {
      throw new Error('Manager not found');
    }
    Object.assign(manager, updateDto);
    return this.managerRepository.save(manager);
  }

  async delete(id: number): Promise<void> {
    await this.managerRepository.delete(id);
  }
}
