
import { BranchParams } from './../shared/models/branchParams';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { BranchListGroupComponent } from "./branch-list-group/branch-list-group.component";
import { Branch } from '../shared/models/branch';
import { NgxPaginationModule } from 'ngx-pagination';
import { Department } from '../shared/models/department';
import { NgFor, NgIf } from '@angular/common';
import { Result } from '../shared/models/Result';

@Component({
  selector: 'app-employee',
  standalone: true,
    templateUrl: './employee.component.html',
    styleUrl: './employee.component.scss',
    providers: [EmployeeService],
    imports: [
      HttpClientModule,
      BranchListGroupComponent,
      NgxPaginationModule,
      NgFor,
      NgIf,
    ]
})
export class EmployeeComponent implements OnInit{

  branches: Branch[] = [];
  branchParams = new BranchParams();
  
  departmentResult?: Result<Department> = new Result<Department>();
  tableSize: number[] = [5, 10, 15, 20];
  
  constructor(private service: EmployeeService) {}

  ngOnInit() {
    this.getBranches();
    this.getDepartment();
  }

  getBranches() {
    this.service.getBranches().subscribe({
      next: response => this.branches = [
        {id:'', branchName:'All', description:'', createDate:'', lastUpdateDate:''},...response
      ],
      error: error => console.log(error)
    })
  }

  public onBranchId(branchId: string) {
    this.branchParams.branchId = branchId;
    this.getDepartment();
  }

  getDepartment() {
    this.service.getDepartments(this.branchParams).subscribe({
      next: (response: HttpResponse<Department[]>) => {      
        this.departmentResult!.pagination = JSON.parse(response.headers.get('Pagination')!);
        this.departmentResult!.value = response.body!;
      },
      error: error => console.log(error)
    });
  }


  onTableDataChange(event:any){
    this.branchParams.pageNumber = event;
    this.getDepartment();
  }

  onTableSizeChange(event:any): void {
    this.branchParams.pageNumber = event.target.value;
    this.branchParams.pageSize = 1;
    this.getDepartment();
  }
}
