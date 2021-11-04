import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@core/interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  searchUserByname(username): Observable<User[]> {
    let path = `${ environment.gitHubUrl}/search/users?q=${ username }`;
    return this._http.get(`${path}`).pipe(map((data) => data['items']));
  }
}
