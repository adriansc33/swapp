import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { PilotDTO } from "src/dto/pilots-dto";
import { StarshipDTO } from "src/dto/starship-dto";
import { TableDataSource } from "src/services/datasource";
import { SwService } from "src/services/sw.service";
import { PopupComponent } from "../popup/popup.component";


@Component({
  selector: 'starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class StarShipsComponent implements OnInit {
  dataSource: StarshipDTO[] = [];
  finalDataSource: any;
  displayedColumns: string[] = ['name', 'model', 'manufacturer', 'cost_in_credits', 'length'];
  expandedElement: any;
  isExpansionDetailRow: any;


  constructor(
    private sw: SwService,
    public PopupPilot: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.getStarShips();
  }

  public getStarShips() {
    this.sw.getStarShips().subscribe(
      (data: any) => {
        if (data != null) {
          this.dataSource = data.results;
          const rows: any[] = [];
          this.dataSource.forEach((element: StarshipDTO) => {
            let p: PilotDTO;
            element.listPilots = [];
            element.pilots.forEach((pilot: any) => {
              this.sw.getPilot(pilot).subscribe(
                (data: any) => {
                  p = data;
                  console.log(JSON.stringify(p));
                  element.listPilots.push(p);
                },
                (error: null) => {
                  alert("service error");
                });
            });
            rows.push(element, { detailRow: true, element });
          });
          //this.dataSource.forEach((element: any) => rows.push(element, { detailRow: true, element }));
          this.finalDataSource = of(rows);
          this.isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
        }
      },
      (error: null) => {
        alert("service error");
      });
  }

  public openDialogPilot(pilotshow: PilotDTO) {
    const dialogRef = this.PopupPilot.open(PopupComponent, {
      data: pilotshow,
      disableClose: true,
      panelClass: 'modal-base',
      width: '475px',
      height: '428px',
      maxWidth: '475px'
    });
  }

}