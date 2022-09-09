import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeCartoesComponent } from './grade-cartoes.component';

describe('GradeCartoesComponent', () => {
  let component: GradeCartoesComponent;
  let fixture: ComponentFixture<GradeCartoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeCartoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeCartoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
