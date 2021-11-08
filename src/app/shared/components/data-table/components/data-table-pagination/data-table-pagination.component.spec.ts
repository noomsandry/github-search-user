import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTablePaginationComponent } from './data-table-pagination.component';

describe('DataTablePaginationComponent', () => {
  let component: DataTablePaginationComponent;
  let fixture: ComponentFixture<DataTablePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTablePaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.total = 25;
    component.pageSize = 10;
    component.computeNbPage();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('compute page number', () => {
    expect(component.nbPage).toEqual(3);
  });

  it('next page', () => {
    expect(component.currentPage).toEqual(1);
    component.nextPage();
    expect(component.currentPage).toEqual(2);
    component.nextPage();
    expect(component.currentPage).toEqual(3);
    /**
     * because current page cannot > nbPage
     */
    component.nextPage();
    expect(component.currentPage).toEqual(3);
  });

  it('previous page', () => {
    expect(component.currentPage).toEqual(1);
    component.nextPage();
    expect(component.currentPage).toEqual(2);
    component.prevPage();
    expect(component.currentPage).toEqual(1);
    /**
     * because current page cannot < 1
     */
    component.prevPage();
    expect(component.currentPage).toEqual(1);
  });

  it('next / previous boutton accessibility ', () => {
    /* previous button is disabled by default */
    const compiled = fixture.debugElement.nativeElement;
    let previousBtn = compiled.querySelector("button:first-of-type");
    expect(previousBtn.hasAttribute("disabled")).toBeTrue();

    /* next button must enabled beacause nbPage > 1 */
    let nextBtn = compiled.querySelector("button:last-of-type");
    expect(nextBtn.hasAttribute("disabled")).toBeFalse();

    /* next page */
    component.nextPage();
    fixture.detectChanges();
    expect(previousBtn.hasAttribute("disabled")).toBeFalse();

    /* next button must disabled beacause currentPage < nbPage */
    component.nextPage();
    component.nextPage();
    fixture.detectChanges();
    expect(nextBtn.hasAttribute("disabled")).toBeTrue();

  });


  it("emit current page", () => {
    let currentPage: number;
    component.onChange.subscribe((value) => (currentPage = value));

    component.nextPage();
    expect(currentPage).toBe(2);

    component.nextPage();
    expect(currentPage).toBe(3);

  });
});
