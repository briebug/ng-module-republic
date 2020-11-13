import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Cell } from '@bba/api-interfaces';

@Component({
  selector: 'bba-cell-details',
  templateUrl: './cell-details.component.html',
  styleUrls: ['./cell-details.component.scss']
})
export class CellDetailsComponent {
  currentCell: Cell;
  originalTitle = '';
  cellForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createFormGroup();
  }

  @Input() set cell(value: Cell) {
    if(value) this.originalTitle = value.title;
    this.currentCell = {...value};
    this.cellForm.patchValue(value);
  };
  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(this.cellForm.value);
    formDirective.resetForm();
  }

  createFormGroup() {
    this.cellForm = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      description: [''],
      routePath: ['', Validators.required],
      uri: ['', Validators.required],
      module: ['', Validators.required],
      healthy: [false],
      published: [false],
    });
  }
}
