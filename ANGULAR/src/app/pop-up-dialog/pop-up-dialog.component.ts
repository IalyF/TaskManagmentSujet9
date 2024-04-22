import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatDialogContent, MatDialogTitle, MatDialogActions } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pop-up-dialog',
  standalone: true,
  imports: [
    MatInputModule,
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    MatButtonModule
  ],
  templateUrl: './pop-up-dialog.component.html',
  styleUrl: './pop-up-dialog.component.css'
})
export class PopUpDialogComponent {

  

}
