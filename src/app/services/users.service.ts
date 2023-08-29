import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _httpClient: HttpClient,) {}

  getUsers() {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/users')
    .pipe(map((users: any) => {
      return users.map((user: any) => ({
        id: user.id,
        firstName: (user.name as string).split(' ')[0],
        lastName: (user.name as string).split(' ')[1],
        email: user.email,
        password: '123456'
      }));
    }));
  }
}
