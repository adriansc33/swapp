import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
  })
  export class MainComponent implements OnInit {
  
    imgUser = "../assets/images/user3.svg";

    constructor(
      private router: Router
    ) { }
  
    ngOnInit() {
      this.router.navigate(["/main/home"]);
    }
  }