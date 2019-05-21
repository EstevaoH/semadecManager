import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Futebolde7Component } from './futebolde7.component';

describe('Futebolde7Component', () => {
  let component: Futebolde7Component;
  let fixture: ComponentFixture<Futebolde7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Futebolde7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Futebolde7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
