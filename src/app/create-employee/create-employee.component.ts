import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule],
  providers: [EmployeeService],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss'
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employService: EmployeeService, private router: Router) { }

  ngOnInit(): void {

  }

  saveEmployee() {
    this.employService.createEmployee(this.employee).subscribe(data => {
      console.log("Data received", data);
      this.router.navigate(['/employee'])
    })
  }

  onSubmit() {
    this.saveEmployee();
  }
}
