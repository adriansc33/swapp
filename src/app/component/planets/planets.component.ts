import { Component, OnInit } from "@angular/core";
import { PlanetsDTO } from "src/dto/planets-dto";
import { SwService } from "src/services/sw.service";

@Component({
    selector: 'planets',
    templateUrl: './planets.component.html',
    styleUrls: ['./planets.component.css']
  })
  export class PlanetsComponent implements OnInit {
    dataSource: any;
    displayedColumns: string[] = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity'];
    constructor(
      private sw: SwService
    ) { }

    ngOnInit() {
      this.getPlanets();
    }

    public getPlanets() {
      this.sw.getPlanets().subscribe(
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