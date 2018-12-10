import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitelizeComponent } from './titelize.component';

describe('TitelizeComponent', () => {
  let component: TitelizeComponent;
  let fixture: ComponentFixture<TitelizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitelizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitelizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
