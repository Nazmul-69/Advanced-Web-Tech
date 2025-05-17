import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Announcement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string; 

  @Column()
  content: string; 

  @Column()
  department: string; 

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date; 
}