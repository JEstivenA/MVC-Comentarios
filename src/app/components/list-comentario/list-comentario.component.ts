import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/Comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

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


  constructor(private _comentarioServices: ComentarioService) { }

  ngOnInit(): void {
    this.getComentarios();
  }

  getComentarios(){
    this._comentarioServices.getListComentarios().subscribe(data => {
      console.log(data);
    }, error =>{
      console.log(error);
    })
  }

}
