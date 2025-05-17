import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Timesheet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeName: string; 

  @Column({ type: 'timestamp', nullable: true })
  clockIn: Date; 

  @Column({ type: 'timestamp', nullable: true })
  clockOut: Date; 

  @Column({ type: 'float', default: 0 })
  hoursWorked: number; 

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date; 
}