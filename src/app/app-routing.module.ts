import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FilmsComponent } from "./component/films/films.component";
import { HomeComponent } from "./component/home/home.component";
import { MainComponent } from "./component/main/main.component";
import { PlanetsComponent } from "./component/planets/planets.component";
import { StarShipsComponent } from "./component/starships/starships.component";
import { VehiclesComponent } from "./component/vehicles/vehicles.component";

const routes: Routes = [
    { path: '', component: MainComponent },
    {
        path: 'main', component: MainComponent, children: [
            { path: 'home', component: HomeComponent },
            {
                path: 'starships', component: StarShipsComponent
            },
            {
               
                 path: 'films', component: FilmsComponent 
            },
            {
          
               path: 'planets', component: PlanetsComponent 
                
            },
            {
          
                path: 'vehicles', component: VehiclesComponent 
                 
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }