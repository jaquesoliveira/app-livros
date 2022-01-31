import { Editora } from './editora';
import { Autor } from './autor';

export interface Livro{
  id?: number,
  nome: string,
  editora: Editora,
  autores: Autor[]
}
