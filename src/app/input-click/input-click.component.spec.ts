import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputClickComponent } from './input-click.component';

describe('InputClickComponent', () => {
  let component: InputClickComponent;
  let fixture: ComponentFixture<InputClickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputClickComponent]
    });
    fixture = TestBed.createComponent(InputClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
