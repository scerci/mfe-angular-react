import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Extcomp2Component } from './extcomp2.component';

describe('Extcomp2Component', () => {
  let component: Extcomp2Component;
  let fixture: ComponentFixture<Extcomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Extcomp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Extcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
