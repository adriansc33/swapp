import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuService } from 'src/services/menu.service';
import { SwService } from 'src/services/sw.service';

import { AppComponent } from './app.component';
import { FooterComponent } from './component/common/footer/footer.component';
import { FilmsComponent } from './component/films/films.component';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { MainComponent } from './component/main/main.component';
import { MenuComponent } from './component/menu/menu.component';
import { PlanetsComponent } from './component/planets/planets.component';
import { StarShipsComponent } from './component/starships/starships.component';
import { VehiclesComponent } from './component/vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HeaderComponent } from './component/common/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './component/popup/popup.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    StarShipsComponent,
    VehiclesComponent,
    PlanetsComponent,
    FilmsComponent,
  ],
  entryComponents: [
    PopupComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  exports: [
    MatDialogContent
  ],
  providers: [
    SwService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
