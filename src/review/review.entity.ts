import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeName: string; 

  @Column()
  evaluation: string; 

  @Column()
  goals: string; 
}