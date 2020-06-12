import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrycenComponent } from './brycen.component';

describe('BrycenComponent', () => {
  let component: BrycenComponent;
  let fixture: ComponentFixture<BrycenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrycenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrycenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
