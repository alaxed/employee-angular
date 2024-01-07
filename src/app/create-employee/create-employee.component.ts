import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


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
  id!: number;

  constructor(private employService: EmployeeService, private router: Router, private location: Location, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));

  }

  saveEmployee() {
    this.employService.createEmployee(this.employee).subscribe(data => {
      console.log("Data received", data);
      window.location.reload();
    });
  }


  onSubmit() {
    this.saveEmployee();
  }

  updateEmployee() {
    this.employService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.router.navigate(['/employee'])
    }, error => console.log(error));
  }
}
