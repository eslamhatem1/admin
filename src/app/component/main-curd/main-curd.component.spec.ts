import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCURDComponent } from './main-curd.component';

describe('MainCURDComponent', () => {
  let component: MainCURDComponent;
  let fixture: ComponentFixture<MainCURDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCURDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCURDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
