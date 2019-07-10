import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattomComponent } from './battom.component';

describe('BattomComponent', () => {
  let component: BattomComponent;
  let fixture: ComponentFixture<BattomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
