import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    EmployeeComponent
  ],
  exports: [
    EmployeeComponent
  ]
})
export class EmployeeModule { }
