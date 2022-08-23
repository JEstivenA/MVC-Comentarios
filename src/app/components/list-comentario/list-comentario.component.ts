import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/Comentario';

@Component({
  selector: 'app-list-comentario',
  templateUrl: './list-comentario.component.html',
  styleUrls: ['./list-comentario.component.css']
})
export class ListComentarioComponent implements OnInit {

  listComentario: Comentario []= [
    {titulo:'Angular', creador:'Jarny', fechaCreacion:new Date(), texto:'Framework para crear SPA'},
    {titulo:'React', creador:'Estiven', fechaCreacion:new Date(), texto:'Libreria Para Crear SPA'}
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
