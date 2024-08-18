import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvDetalisComponent } from './tv-detalis.component';

describe('TvDetalisComponent', () => {
  let component: TvDetalisComponent;
  let fixture: ComponentFixture<TvDetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvDetalisComponent]
    });
    fixture = TestBed.createComponent(TvDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
