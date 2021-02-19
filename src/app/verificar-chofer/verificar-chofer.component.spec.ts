import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarChoferComponent } from './verificar-chofer.component';

describe('VerificarChoferComponent', () => {
  let component: VerificarChoferComponent;
  let fixture: ComponentFixture<VerificarChoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarChoferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
