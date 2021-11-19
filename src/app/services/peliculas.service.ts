import { Injectable } from "@angular/core";
import { Global } from '../global';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ServicePeliculas {

    //Inyectamos el cliente http
    constructor(private _http: HttpClient) { }

    getGeneros(): Observable<any> {
        var request = "/api/Generos";
        var url = Global.urlpeliculas + request;

        return this._http.get(url);
    }

    getNacionalidad(): Observable<any> {
        var request = "/api/Nacionalidades";
        var url = Global.urlpeliculas + request;

        return this._http.get(url);
    }

    getPeliculasGenero(genero: string): Observable<any> {
        var request = "/api/Peliculas/PeliculasGenero/" + genero;
        var url = Global.urlpeliculas + request;

        return this._http.get(url);
    }

    getPeliculasNacionalidad(nacionalidad: string): Observable<any> {
        var request = "/api/Peliculas/PeliculasNacionalidad/" + nacionalidad;
        var url = Global.urlpeliculas + request;

        return this._http.get(url);
    }

}