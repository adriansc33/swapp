import { Component, OnInit } from "@angular/core";
import { SwService } from "src/services/sw.service";

@Component({
    selector: 'vehicles',
    templateUrl: './vehicles.component.html',
    styleUrls: ['./vehicles.component.css']
  })
  export class VehiclesComponent implements OnInit {
    dataSource: any;
    displayedColumns: string[] = ['name', 'model', 'manufacturer', 'cost_in_credits', 'length', 'max_atmosphering_speed'];
   
    constructor(
      private sw: SwService
    ) { }
  
    ngOnInit() {
      this.getVehicles();
    }

    public getVehicles() {
      this.sw.getVehicles().subscribe(
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