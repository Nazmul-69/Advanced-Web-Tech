import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async getEmployeeDirectory(search: string): Promise<Employee[] | { message: string }> {
    let employees: Employee[];

    if (search) {
      employees = await this.employeeRepository.find({
        where: [
          { name: Like(`%${search}%`) },
          { email: Like(`%${search}%`) },
        ],
      });
    } else {
      employees = await this.employeeRepository.find();
    }

    if (employees.length === 0) {
      return { message: 'No employees found' }; 
    }

    return employees;
  }
}
