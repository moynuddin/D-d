import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicktsComponent } from './tickts.component';

describe('TicktsComponent', () => {
  let component: TicktsComponent;
  let fixture: ComponentFixture<TicktsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicktsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicktsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
