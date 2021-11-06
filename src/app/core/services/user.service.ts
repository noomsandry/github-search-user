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

  searchUser(criteria): Observable<{users: User[], total:number}> {
    let path = `${ environment.gitHubUrl}/search/users`;
    return this._http.get(`${path}`, { params: criteria })
            .pipe(
              map((data:any) => ({
                  users : data.items,
                  total: data.total_count
              }))
            );
  }
}
