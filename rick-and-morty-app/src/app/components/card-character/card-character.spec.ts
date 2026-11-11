import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCharacter } from './card-character';

describe('CardCharacter', () => {
  let component: CardCharacter;
  let fixture: ComponentFixture<CardCharacter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCharacter],
    }).compileComponents();

    fixture = TestBed.createComponent(CardCharacter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
