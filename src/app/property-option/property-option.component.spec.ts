import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyOptionComponent } from './property-option.component';

describe('PropertyOptionComponent', () => {
  let component: PropertyOptionComponent;
  let fixture: ComponentFixture<PropertyOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
