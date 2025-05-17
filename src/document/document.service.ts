import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document } from './document.entity';
import { CreateDocumentDto } from './dto/create-document.dto';

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(Document)
    private documentRepository: Repository<Document>,
  ) {}

  async createDocument(createDto: CreateDocumentDto): Promise<Document> {
    try {
      const document = this.documentRepository.create(createDto);
      return await this.documentRepository.save(document);
    } catch (error) {
      console.error('Error creating document:', error);
      throw new InternalServerErrorException('Failed to create document');
    }
  }

  async getDocumentsByDepartment(department: string): Promise<Document[]> {
    try {
      return await this.documentRepository.find({ where: { department } });
    } catch (error) {
      console.error('Error fetching documents by department:', error);
      throw new InternalServerErrorException('Failed to fetch documents');
    }
  }
}
