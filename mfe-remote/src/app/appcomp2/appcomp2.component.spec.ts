import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appcomp2Component } from './appcomp2.component';

describe('Appcomp2Component', () => {
  let component: Appcomp2Component;
  let fixture: ComponentFixture<Appcomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Appcomp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
