import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularRoomComponent } from './popular-room.component';

describe('PopularRoomComponent', () => {
  let component: PopularRoomComponent;
  let fixture: ComponentFixture<PopularRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
