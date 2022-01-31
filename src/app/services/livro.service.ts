import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Livro } from '../models/livro';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private url = environment.restBaseUrl + 'v1/livros/';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json;charset=UTF-8'})
  }

  getLivrosList(): Observable<Livro[]>{
    return this.httpClient.get<Livro[]>(`${this.url}`)
    .pipe(
      catchError(this.handlerError)
    );
  }

  handlerError(error: HttpErrorResponse){
    let errorMessage = '';

    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage =  `Código do erro: ${error.status},` + `mensagem: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
