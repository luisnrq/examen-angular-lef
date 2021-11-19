import { Component, OnInit, Input } from '@angular/core';

import { Pelicula } from '../models/pelicula';

@Component({
  selector: 'app-detallepelicula',
  templateUrl: './detallepelicula.component.html',
  styleUrls: ['./detallepelicula.component.css']
})
export class DetallepeliculaComponent implements OnInit {

  @Input() pelialhijo!: Pelicula;

  constructor() { }

  ngOnInit(): void {
  }

}
