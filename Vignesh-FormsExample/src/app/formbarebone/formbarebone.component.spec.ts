import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbareboneComponent } from './formbarebone.component';

describe('FormbareboneComponent', () => {
  let component: FormbareboneComponent;
  let fixture: ComponentFixture<FormbareboneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormbareboneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbareboneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
