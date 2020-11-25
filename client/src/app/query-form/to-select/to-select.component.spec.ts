import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToSelectComponent } from './to-select.component';

describe('ToSelectComponent', () => {
  let component: ToSelectComponent;
  let fixture: ComponentFixture<ToSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
