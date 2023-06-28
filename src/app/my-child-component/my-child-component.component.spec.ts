import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChildComponent } from './my-child-component.component';

describe('MyChildComponent', () => {
  let component: MyChildComponent;
  let fixture: ComponentFixture<MyChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyChildComponent],
    });
    fixture = TestBed.createComponent(MyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
