import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbartresComponent } from './navbartres.component';

describe('NavbartresComponent', () => {
  let component: NavbartresComponent;
  let fixture: ComponentFixture<NavbartresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbartresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbartresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
