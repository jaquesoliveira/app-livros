import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroComponent } from './pages/livro/livro.component';
import { AutorComponent } from './pages/autor/autor.component';
import { EditoraComponent } from './pages/editora/editora.component';
import { HomeComponent } from './pages/home/home.component';
import { FormLivroComponent } from './pages/livro/form-livro/form-livro.component';
import { ListLivroComponent } from './pages/livro/list-livro/list-livro.component';

const routes: Routes = [
  {path:'livros', component: LivroComponent},
  {path:'livros/novo', component: FormLivroComponent},
  {path:'livros/pesquisar', component: ListLivroComponent},
  {path:'autores', component: AutorComponent},
  {path:'editoras', component: EditoraComponent},
  {path:'home', component: HomeComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
