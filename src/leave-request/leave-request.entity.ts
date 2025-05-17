import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LeaveRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeName: string;

  @Column()
  reason: string;

  @Column({ default: 'Pending' }) 
  status: string; 

  @Column({ nullable: true })
  managerComment: string; 
}