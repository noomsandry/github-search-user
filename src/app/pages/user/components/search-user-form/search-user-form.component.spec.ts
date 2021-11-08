import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { SearchUserFormComponent } from './search-user-form.component';

describe('SearchUserFormComponent', () => {
  let component: SearchUserFormComponent;
  let fixture: ComponentFixture<SearchUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUserFormComponent ],
      imports: [
        StoreModule.forRoot([]),
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input', () => {
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('input[type="text"]');
    expect(input).toBeTruthy();
  });

  it('should render search button', () => {
    const compiled = fixture.debugElement.nativeElement;
    const input = compiled.querySelector('button.submit-btn');
    expect(input).toBeTruthy();
  });

  it('should render reset button', () => {
    const compiled = fixture.debugElement.nativeElement;
    let resetButton = compiled.querySelector('button.reset-btn');
    const SearchButton = fixture.debugElement.nativeElement.querySelector('button.submit-btn');

    expect(resetButton).toBeFalsy();

    component.login.setValue("eric");
     // Trigger the search button
    SearchButton.click();
    fixture.detectChanges();
    resetButton = compiled.querySelector('button.reset-btn');
    expect(resetButton).toBeTruthy();

  });

  it("form invalid when empty", () => {
    expect(component.login.valid).toBeFalsy();
  });

  it("display form error", () => {
    const compiled = fixture.debugElement.nativeElement;
    let button = fixture.debugElement.nativeElement.querySelector('button.submit-btn');
    button.click();
    fixture.detectChanges();
    const input = compiled.querySelector('.invalid-feedback');
    expect(input.textContent.trim()).toEqual('Username input is required value');
  });

  it("completed field validity", () => {
    let errors = {};
    let login = component.login
    login.setValue(undefined);
    errors = login.errors || {};
    expect(errors["required"]).toBeTruthy();
  });

  it("submitting a form emits a login", () => {
    expect(component.login.valid).toBeFalsy();
    component.login.setValue("eric");

    expect(component.login.valid).toBeTruthy();

    let login: string;
    component.onSubmit.subscribe((value) => (login = value));

    // Trigger the search button
    let button = fixture.debugElement.nativeElement.querySelector('button.submit-btn');
    button.click();

    // Now we can check to make sure the emitted value is correct
    expect(login).toBe("eric");
  });
});
