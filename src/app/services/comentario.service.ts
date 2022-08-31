import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../interfaces/Comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private MyAppUrl = 'https://localhost:7227/';
  private MyApiUrl = 'api/comentario/';

  constructor(private http: HttpClient) { }

  getListComentarios():Observable<any>{
    return this.http.get(this.MyAppUrl + this.MyApiUrl);
  }

  deleteComentario(id:number): Observable<any>{
    return this.http.delete(this.MyAppUrl + this.MyApiUrl + id);
  }

  getComentario(id:number) : Observable<any>{
    return this.http.get(this.MyAppUrl + this.MyApiUrl + id);
  }

  saveComentario(comentario: Comentario): Observable<any> {
    return this.http.post(this.MyAppUrl + this.MyApiUrl, comentario);
  }

  updateComentario(id: number, comentario:Comentario): Observable<any>{
    return this.http.put(this.MyAppUrl + this.MyApiUrl + id, comentario);
  }
}
