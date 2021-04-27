import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestbookTileComponent } from './guestbook-tile.component';

describe('GuestbookTileComponent', () => {
  let component: GuestbookTileComponent;
  let fixture: ComponentFixture<GuestbookTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestbookTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestbookTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
