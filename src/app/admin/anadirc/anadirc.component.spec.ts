import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadircComponent } from './anadirc.component';

describe('AnadircComponent', () => {
  let component: AnadircComponent;
  let fixture: ComponentFixture<AnadircComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadircComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadircComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
