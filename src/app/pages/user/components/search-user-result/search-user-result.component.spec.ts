import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { SearchUserResultComponent } from './search-user-result.component';

describe('SearchUserResultComponent', () => {
  let component: SearchUserResultComponent;
  let fixture: ComponentFixture<SearchUserResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUserResultComponent ],
      imports: [
        StoreModule.forRoot([]),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display loading status', () => {
    const compiled = fixture.debugElement.nativeElement;
    let spinner = compiled.querySelector('.spinner-border');
    expect(spinner).toBeFalsy();
    component.loading = true;
    fixture.detectChanges();
    spinner = compiled.querySelector('.spinner-border');
    expect(spinner).toBeTruthy();
  });

  it('display result info', () => {
    let totalUsers = 20;
    component.totalUsers = totalUsers;
    component.submited = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    let info = compiled.querySelector('.result-info');
    expect(info.textContent.trim()).toEqual(`${totalUsers} matching users found`);

  });

  afterEach(() => {
    fixture.destroy();
  });

});
