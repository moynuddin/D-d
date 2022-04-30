import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TicktsComponent } from '../tickts/tickts.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  todos: Array<string> = ['Go to shoppping', 'Read books', 'Finish task'];
  inProgress: Array<string> = ['Finish task'];
  codeReview: Array<string> = [];
  done: Array<string> = ['Dinner'];
  isClicked: Boolean = false;
  result: any;
  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  handleTask() {
    const dialogRef = this.dialog.open(TicktsComponent);
    dialogRef.afterClosed().subscribe((res) => {
      this.result = res;
      this.todos.push(this.result.ticket);
    });
  }
  handleTicket(i: any) {
    console.log('Called', i);
    const dialogRef = this.dialog.open(TicktsComponent, {
      data: { ticketDetails: this.result },
    });
    dialogRef.afterOpened().subscribe((res) => {
      console.log('Opened', res);
    });
  }
}
