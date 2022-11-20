import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMembersCardsComponent } from './add-members-cards.component';

describe('AddMembersCardsComponent', () => {
  let component: AddMembersCardsComponent;
  let fixture: ComponentFixture<AddMembersCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMembersCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMembersCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
