import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-pop-up-edititng-task',
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
  templateUrl: './pop-up-edititng-task.component.html',
  styleUrl: './pop-up-edititng-task.component.css'
})
export class PopUpEdititngTaskComponent {

}
