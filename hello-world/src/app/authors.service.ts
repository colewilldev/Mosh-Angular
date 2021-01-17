import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  getAuthors(){
    return ['Cole 1', 'Author 2', 'Author 3']
  }
}
