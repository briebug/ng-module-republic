import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Cell } from '@bba/api-interfaces';

@Component({
  selector: 'bba-cell-details',
  templateUrl: './cell-details.component.html',
  styleUrls: ['./cell-details.component.scss']
})
export class CellDetailsComponent {
  originalTitle = '';
  cellForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createFormGroup();
  }

  @Input() set cell(value: Cell) {
    if (!value) return;
    this.originalTitle = value.title;
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
      componentName: ['', Validators.required],
      remoteName: ['', Validators.required],
      uri: ['', Validators.required],
      module: ['', Validators.required],
      healthy: [true],
      published: [true],
      visible: [true]
    });
  }
}
