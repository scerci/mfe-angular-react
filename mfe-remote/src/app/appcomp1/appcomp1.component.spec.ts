import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appcomp1Component } from './appcomp1.component';

describe('Appcomp1Component', () => {
  let component: Appcomp1Component;
  let fixture: ComponentFixture<Appcomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Appcomp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
