import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialog } from "@angular/material/dialog";
import { PopUpDialogComponent } from "./pop-up-dialog/pop-up-dialog.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PopUpDialogComponent,
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor( public dialog : MatDialog ){}

  title = 'ANGULAR';
  
  animal: string = "";
  name: string = "";

  all_task : any[] = new Array(
    { id:0, title:"Do homework", description:"It must be done before Sunday cause it's very important." },
    { id:1, title:"Ask teacher", description: "Ask mister Fanilo what's the Restful architect." },
    { id:2, title:"Go to the market", description: "Got to the market this afternoon to buy shoes for the baby" },
    { id:3,title:"Finish the projet", description: "Finish and deploi the project on github because the deadline is near" }
  );

  addTaskForm():void {

    const dialogRef = this.dialog.open(PopUpDialogComponent, {
      data: {name: this.name, animal: this.animal},
    });

  }
}
