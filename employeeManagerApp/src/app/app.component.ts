import {Component, OnInit} from '@angular/core';
import {Employee} from "./employee";
import {EmployeeService} from "./employee.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'employeemanagerapp';
  // @ts-ignore
  public employees: Employee[];
  // @ts-ignore
  public updateEmployee: Employee;
  // @ts-ignore
  public deleteEmployee: Employee;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe( {
      next: (response: Employee[]) => {
        this.employees = response;
      },
      error: (err : HttpErrorResponse) => {
        alert(err.message);
      }
    });
  }

  public onAddEmployee(addFrom: NgForm): void {
    // @ts-ignore
    document.getElementById('add-employee-from').click();
    this.employeeService.addEmployee(addFrom.value).subscribe({
    next :(response : Employee) => {
      console.log(response);
      this.getEmployees();
      addFrom.reset();
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message)
      addFrom.reset();
    }
  });
  }
  public onUpdateEmployee(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe({
      next :(response : Employee) => {
        console.log(response);
        this.getEmployees();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
      }
    });
  }

  public onDeleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe({
      next :(response : void) => {
        console.log(response);
        this.getEmployees();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
      }
    });
  }

  public searchEmployees(key: string): void {
    console.log(key)
    const results: Employee[] = [];
    for (const  employee of this.employees) {
      if (employee.name.toLowerCase().indexOf(key.toLowerCase()) != -1
      || employee.email.toLowerCase().indexOf(key.toLowerCase()) != -1
      || employee.phone.toLowerCase().indexOf(key.toLowerCase()) != -1
      || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) != -1) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length == 0 || ! key) {
      this.getEmployees();
    }
  }

  public onOpenModal(employee: Employee | null, mode: string) {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'update') {
      // @ts-ignore
      this.updateEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');

    }
    if (mode === 'delete') {
      // @ts-ignore
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    // @ts-ignore
    container.appendChild(button);
    button.click();
  }

  //protected readonly model = model;
}
