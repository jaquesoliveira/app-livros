import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';
import { Livro } from 'src/app/models/livro';

@Component({
  selector: 'app-list-livro',
  templateUrl: './list-livro.component.html',
  styleUrls: ['./list-livro.component.css']
})
export class ListLivroComponent implements OnInit {

  public livrosList: Array<Livro> = [];

  constructor(private service:LivroService) { }

  ngOnInit(): void {
    this.getListaLivros()
  }

  getListaLivros(){
    this.service.getLivrosList()
    .subscribe(
      data=>{
        this.livrosList = data
      },
      error => {
        console.log(error.message);
      }
    )
  }

}
