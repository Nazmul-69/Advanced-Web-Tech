import { Controller, Post, Get, Param, Body, UseGuards } from '@nestjs/common';
import { DocumentService } from './document.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  @UseGuards(JwtAuthGuard) 
  async createDocument(@Body() createDto: CreateDocumentDto) {
    return this.documentService.createDocument(createDto);
  }

  @Get('department/:department')
  @UseGuards(JwtAuthGuard) 
  async getDocumentsByDepartment(@Param('department') department: string) {
    return this.documentService.getDocumentsByDepartment(department);
  }
}
