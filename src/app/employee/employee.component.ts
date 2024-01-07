import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    CommonModule,
    CreateEmployeeComponent,
    EmployeeListComponent

  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {

  
}
