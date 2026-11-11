import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharacter } from './list-character';

describe('ListCharacter', () => {
  let component: ListCharacter;
  let fixture: ComponentFixture<ListCharacter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCharacter],
    }).compileComponents();

    fixture = TestBed.createComponent(ListCharacter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
