import { Pagination } from './shared/models/pagination';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { EmployeeModule } from './employee/employee.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    CoreModule,
    EmployeeModule,
  ]
})
export class AppComponent {
  title = 'client-app';
}
