import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToSumComponent } from './to-sum.component';

describe('ToSumComponent', () => {
  let component: ToSumComponent;
  let fixture: ComponentFixture<ToSumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToSumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
