import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeGuestbookEntryComponent } from './make-guestbook-entry.component';

describe('MakeGuestbookEntryComponent', () => {
  let component: MakeGuestbookEntryComponent;
  let fixture: ComponentFixture<MakeGuestbookEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeGuestbookEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeGuestbookEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
