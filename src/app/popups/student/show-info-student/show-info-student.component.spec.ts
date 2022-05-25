import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInfoStudentComponent } from './show-info-student.component';

describe('ShowInfoStudentComponent', () => {
  let component: ShowInfoStudentComponent;
  let fixture: ComponentFixture<ShowInfoStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInfoStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInfoStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
