import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTableComponent } from './data-table.component';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    component.columns = [
      {
        id: "colA",
        title: "COLUMN A",
      },
      {
        id: "colB",
        title: "COLUMN B",
      }
    ];
    component.data = [
      {
        colA : "Row 1A",
        colB : "Row 1B"
      },
      {
        colA : "Row 2A",
        colB : "Row 2B"
      },
      {
        colA : "Row 3A",
        colB : "Row 3B"
      }
  ]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header', () => {
    const compiled = fixture.debugElement.nativeElement;
    const header = compiled.querySelectorAll('app-data-table-header');
    expect(header.length).toBe(component.columns.length);
  });

  it('should render rows', () => {
    const compiled = fixture.debugElement.nativeElement;
    const rows = compiled.querySelectorAll('.row-data');
    expect(rows.length).toBe(component.data.length);
  });

  it('should render cells', () => {
    const compiled = fixture.debugElement.nativeElement;
    const rows = compiled.querySelectorAll('.cell-data');
    let cellsLength = component.data.length * component.columns.length;
    expect(rows.length).toBe(cellsLength);
  });

});
