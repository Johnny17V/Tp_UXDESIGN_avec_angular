import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Langue } from './langue';

describe('Langue', () => {
  let component: Langue;
  let fixture: ComponentFixture<Langue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Langue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Langue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
