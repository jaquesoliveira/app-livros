import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LivroComponent } from './pages/livro/livro.component';
import { AutorComponent } from './pages/autor/autor.component';
import { EditoraComponent } from './pages/editora/editora.component';
import { FormLivroComponent } from './pages/livro/form-livro/form-livro.component';
import { ListLivroComponent } from './pages/livro/list-livro/list-livro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LivroComponent,
    AutorComponent,
    EditoraComponent,
    FormLivroComponent,
    ListLivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
