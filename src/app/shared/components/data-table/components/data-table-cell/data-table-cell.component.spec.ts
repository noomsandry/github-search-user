import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableCellComponent } from './data-table-cell.component';

describe('DataTableCellComponent', () => {
  let component: DataTableCellComponent;
  let fixture: ComponentFixture<DataTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render value', () => {
    const value = 'TEST'
    component.value = value;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.cell-value').textContent.trim()).toEqual(value);
  });
});
