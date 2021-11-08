import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SearchUserCriteria } from '@core/interfaces/user.interface';
import { StoreModule } from '@ngrx/store';
import { UserService } from './user.service';
import * as _ from 'lodash';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot([]),
        HttpClientModule
      ]
    });
    userService = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should find user', () => {
    const criteria: SearchUserCriteria = {
      q: 'noomsandry',
    }

    userService.searchUser(criteria).subscribe((response) => {
      expect(_.find(response.users, user => user.login === criteria.q)).toBeTruthy()
    })
  });

  it('number of result per page', () => {
    const criteria: SearchUserCriteria = {
      q: 'eric',
      per_page: 20,
      page: 1
    }

    userService.searchUser(criteria).subscribe((response) => {
      expect(response.users.length).toEqual(criteria.per_page);
    })
  });
});
