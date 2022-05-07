import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelteticketComponent } from './delteticket.component';

describe('DelteticketComponent', () => {
  let component: DelteticketComponent;
  let fixture: ComponentFixture<DelteticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelteticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelteticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
