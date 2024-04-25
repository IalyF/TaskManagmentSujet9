import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-po-up-deleting-task',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogActions,
    MatInputModule,
    MatDialogContent,
    MatButtonModule,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './po-up-deleting-task.component.html',
  styleUrl: './po-up-deleting-task.component.css'
})
export class PoUpDeletingTaskComponent {

}
