import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  providers: [EmployeeService],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.scss'
})
export class UpdateEmployeeComponent implements OnInit {
  id!: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.router.navigate(['/employee'])
    }, error => console.log(error));
  }
}
