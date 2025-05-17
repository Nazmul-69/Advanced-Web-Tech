import { Controller, Post, Body, Get, Param, Put, Delete, UsePipes, ValidationPipe, UseGuards, Query } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { CreateManagerDto } from './dto/create-manager.dto';
import { LoginManagerDto } from './dto/login-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('managers')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) {}

  @Post('register')
  @UsePipes(ValidationPipe)
  async register(@Body() createDto: CreateManagerDto) {
    return this.managerService.register(createDto);
  }

  @Post('login')
  @UsePipes(ValidationPipe)
  async login(@Body() loginDto: LoginManagerDto) {
    const token = await this.managerService.login(loginDto.username, loginDto.password);
    if (!token) {
      return { message: 'Invalid username or password' };
    }
    return { message: 'Login successful', ...token };
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard) 
  async logout() {
    return { message: 'Logout successful. Please remove the token from your client.' };
  }

  @Get()
  @UseGuards(JwtAuthGuard) 
  async getAll() {
    return this.managerService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard) 
  async getOne(@Param('id') id: number) {
    return this.managerService.findOne(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard) 
  async update(@Param('id') id: number, @Body() updateDto: UpdateManagerDto) {
    return this.managerService.update(id, updateDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard) 
  async remove(@Param('id') id: number) {
    await this.managerService.delete(id);
    return { message: 'Manager deleted successfully' };
  }

  @Get('employees')
  @UseGuards(JwtAuthGuard) 
  async getEmployeeDirectory(@Query('search') search: string) {
    
    return { message: 'No employees found' };
  }
}
