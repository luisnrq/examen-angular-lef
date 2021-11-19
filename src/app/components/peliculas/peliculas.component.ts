import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServicePeliculas } from 'src/app/services/peliculas.service';
import { Pelicula } from '../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public genero!: string;
  public nacionalidad!: string;
  public peliculas!: Array<Pelicula>;
  public mostrardetalle: boolean;
  public mostrar: boolean;
  public titulo!: string;
  public pelialhijo!: Pelicula;

  constructor(private _activeRoute: ActivatedRoute, private _service: ServicePeliculas) {
    this.mostrardetalle = false;
    this.mostrar = false;
  }

  ngOnInit(): void {
    this.mostrarDatos();
  }

  mostrarDatos(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['idgenero'] != null) {
        this.genero = params['idgenero'];
        this.titulo = "Peliculas Por genero";
        this.buscarPelisGenero(this.genero);
      } else if (params['idnacionalidad'] != null) {
        this.nacionalidad = params['idnacionalidad'];
        this.titulo = "Peliculas Por Nacionalidad";
        this.buscarPelisNacionalidad(this.nacionalidad);
      }
    });
  }

  buscarPelisGenero(genero: string): void {
    this.mostrardetalle = false;
    this.mostrar = false;
    this._service.getPeliculasGenero(genero).subscribe(response => {
      this.mostrar = true;
      this.peliculas = response;
    });
  }

  buscarPelisNacionalidad(nacionalidad: string): void {
    this.mostrardetalle = false;
    this.mostrar = false;
    this._service.getPeliculasNacionalidad(nacionalidad).subscribe(response => {
      this.mostrar = true;
      this.peliculas = response;
    });
  }

  mostrarDetallePelicula(peli: Pelicula): void {
    this.mostrardetalle = true;
    this.pelialhijo = peli;
  }



}

