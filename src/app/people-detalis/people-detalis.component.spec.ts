import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDetalisComponent } from './people-detalis.component';

describe('PeopleDetalisComponent', () => {
  let component: PeopleDetalisComponent;
  let fixture: ComponentFixture<PeopleDetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleDetalisComponent]
    });
    fixture = TestBed.createComponent(PeopleDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
