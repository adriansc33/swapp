import { Component } from "@angular/core";
import { MenuDTO } from "src/dto/menu-dto";
import { MenuService } from "src/services/menu.service";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
  })

  export class MenuComponent {
    menunav : MenuDTO[];
   
    constructor(private msrv : MenuService) { 
      this.menunav = msrv.getMenu(); 
    }
}