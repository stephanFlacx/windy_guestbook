import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestbookOverviewComponent } from './guestbook-overview.component';

describe('GuestbookOverviewComponent', () => {
  let component: GuestbookOverviewComponent;
  let fixture: ComponentFixture<GuestbookOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestbookOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestbookOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
