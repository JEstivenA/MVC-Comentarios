import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/interfaces/Comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-ver-comentario',
  templateUrl: './ver-comentario.component.html',
  styleUrls: ['./ver-comentario.component.css']
})
export class VerComentarioComponent implements OnInit {

  id:number;
  comentario: Comentario | undefined;

  constructor(private aRoute: ActivatedRoute, private _comentarioServices: ComentarioService) { 
    //Obtener id a travez de la ruta
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getComentario();
  }

  //metodo para obtener un comentario a travez del id
  getComentario(){
    this._comentarioServices.getComentario(this.id).subscribe(data=>{
      this.comentario = data;
    })
  }

}
