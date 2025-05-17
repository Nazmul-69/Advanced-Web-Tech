import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Document {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string; // Title of the document

  @Column()
  url: string; // URL of the document

  @Column()
  department: string; // Department the document is related to
}