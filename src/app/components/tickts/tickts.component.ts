import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-tickts',
  templateUrl: './tickts.component.html',
  styleUrls: ['./tickts.component.scss'],
})
export class TicktsComponent implements OnInit {
  addTicket: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TicktsComponent>
  ) {}

  ngOnInit(): void {
    this.addTicket = this.fb.group({
      ticket: [''],
      desc: [''],
    });
  }
  handleForm() {
    this.dialogRef.close(this.addTicket?.value);
  }
}
