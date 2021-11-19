import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePeliculas } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';

import { Genero } from '../models/genero';
import { Nacionalidad } from '../models/nacionalidad';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public listaGeneros!: Array<Genero>;
  public listaNacionalidad!: Array<Nacionalidad>;

  constructor(private _service: ServicePeliculas, private _router: Router) { }

  ngOnInit(): void {
    this.obtenerPeliculasGenero();
    this.obtenerPeliculasNacionalidad();
  }

  obtenerPeliculasGenero(): void {
    this._service.getGeneros().subscribe(response => {
      this.listaGeneros = response;
    })
  }

  obtenerPeliculasNacionalidad(): void {
    this._service.getNacionalidad().subscribe(response => {
      this.listaNacionalidad = response;
    })
  }

  buscarPelicula() { }

}
