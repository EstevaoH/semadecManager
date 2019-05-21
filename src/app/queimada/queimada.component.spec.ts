import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueimadaComponent } from './queimada.component';

describe('QueimadaComponent', () => {
  let component: QueimadaComponent;
  let fixture: ComponentFixture<QueimadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueimadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueimadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
