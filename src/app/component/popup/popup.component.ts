import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PilotDTO } from "src/dto/pilots-dto";

@Component({
    selector: 'app-messagesuccess',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.css']
  })
  export class PopupComponent {
  
    mensaje : string = "";
  
    constructor(
      private router: Router,
      public dialogRef: MatDialogRef<PopupComponent>,
      @Inject(MAT_DIALOG_DATA) public data: PilotDTO
      ) {}
  
      onClick(): void {
        this.dialogRef.close();
      }
  }

