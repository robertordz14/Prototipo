import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarAdminComponent } from './verificar-admin.component';

describe('VerificarAdminComponent', () => {
  let component: VerificarAdminComponent;
  let fixture: ComponentFixture<VerificarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
