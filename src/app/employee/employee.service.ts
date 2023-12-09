import { BranchParams } from './../shared/models/branchParams';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branch } from '../shared/models/branch';
import { Department } from '../shared/models/department';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: string = 'http://localhost:5000/api/'

  constructor(public http: HttpClient) { }

  getBranches() {
    return this.http.get<Branch[]>(this.baseUrl + 'branches')
  }

  getDepartments(branchParams: BranchParams) {

    let params = new HttpParams()
    .set('pageNumber', branchParams.pageNumber ?? 1)
    .set('pageSize', branchParams.pageSize ?? 10);

    if (branchParams.branchId) params = params.append("branchId", branchParams.branchId);
    
    return this.http.get<Department[]>(this.baseUrl + 'Departments',
      {
        params: params,
        observe: 'response',
        transferCache: {
          includeHeaders: ['Pagination']
        }
      })
  }
}
