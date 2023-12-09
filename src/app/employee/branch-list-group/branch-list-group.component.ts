import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Branch } from '../../shared/models/branch';

@Component({
  selector: 'app-branch-list-group',
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './branch-list-group.component.html',
  styleUrl: './branch-list-group.component.scss'
})
export class BranchListGroupComponent {

  @Input() branches?: Branch[];
  @Output() onBranchIdPicked = new EventEmitter<string>();
  branchId: string = ''

  branchIdSelected?: string;

  public pickBranchId(branchId: string): void {
    this.branchIdSelected = branchId;
    this.onBranchIdPicked.emit(branchId);
  }
}
