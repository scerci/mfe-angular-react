import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Extcomp1Component } from './extcomp1.component';

describe('Extcomp1Component', () => {
  let component: Extcomp1Component;
  let fixture: ComponentFixture<Extcomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Extcomp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Extcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
