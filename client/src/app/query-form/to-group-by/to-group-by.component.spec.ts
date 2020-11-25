import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToGroupByComponent } from './to-group-by.component';

describe('ToGroupByComponent', () => {
  let component: ToGroupByComponent;
  let fixture: ComponentFixture<ToGroupByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToGroupByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToGroupByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
