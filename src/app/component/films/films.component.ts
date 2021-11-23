import { Component, OnInit } from "@angular/core";
import { SwService } from "src/services/sw.service";

@Component({
    selector: 'films',
    templateUrl: './films.component.html',
    styleUrls: ['./films.component.css']
  })
  export class FilmsComponent implements OnInit {
    dataSource: any;
    displayedColumns: string[] = ['title', 'episode_id', 'director', 'producer', 'release_date'];

    constructor(
      private sw: SwService
    ) { }
  
    ngOnInit() {
      this.getFilms();
    }

    public getFilms() {
      this.sw.getFilms().subscribe(
        (data: any) => {
          if (data != null) {
            this.dataSource = data.results;
          }
        },
        (error: null) => {
          alert("service error");
        });
    }

  }