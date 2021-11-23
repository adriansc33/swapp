import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FilmsDTO } from "src/dto/films-dto";
import { PilotDTO } from "src/dto/pilots-dto";
import { PlanetsDTO } from "src/dto/planets-dto";
import { StarshipDTO } from "src/dto/starship-dto";
import { VehiclesDTO } from "src/dto/vehicles-dto";
import { environment } from "src/environments/environment";

@Injectable()
export class SwService {

    private url = environment.url_base;

    constructor(
        private http: HttpClient
    ) { }


    //StarShips
    getStarShips(): Observable<StarshipDTO[]> {
        let url = `${this.url}/starships/`;
        return this.http.get<StarshipDTO[]>(url);
    }

    //Pilots
    getPilots(): Observable<PilotDTO[]> {
        let url = `${this.url}/people/`;
        return this.http.get<PilotDTO[]>(url);
    }

    getPilot(urlPilot: string): Observable<PilotDTO[]> {
        return this.http.get<PilotDTO[]>(urlPilot);
    }

    //Films
    getFilms(): Observable<FilmsDTO[]> {
        let url = `${this.url}/films/`;
        return this.http.get<FilmsDTO[]>(url);
    }

    //Planets
    getPlanets(): Observable<PlanetsDTO[]> {
        let url = `${this.url}/planets/`;
        return this.http.get<PlanetsDTO[]>(url);
    }


    //Vehicles
    getVehicles(): Observable<VehiclesDTO[]> {
        let url = `${this.url}/vehicles/`;
        return this.http.get<VehiclesDTO[]>(url);
    }


}