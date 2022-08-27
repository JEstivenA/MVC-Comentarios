import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
