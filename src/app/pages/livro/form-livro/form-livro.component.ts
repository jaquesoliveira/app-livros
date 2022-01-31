import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-form-livro',
  templateUrl: './form-livro.component.html',
  styleUrls: ['./form-livro.component.css']
})
export class FormLivroComponent implements OnInit {

  constructor(public service: LivroService) { }

  ngOnInit(): void {
  }

}
