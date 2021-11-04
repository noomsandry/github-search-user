import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserViewComponent } from './search-user-view.component';

describe('SearchUserViewComponent', () => {
  let component: SearchUserViewComponent;
  let fixture: ComponentFixture<SearchUserViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUserViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
