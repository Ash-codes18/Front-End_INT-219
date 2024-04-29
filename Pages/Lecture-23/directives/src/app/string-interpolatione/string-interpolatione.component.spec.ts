import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInterpolationeComponent } from './string-interpolatione.component';

describe('StringInterpolationeComponent', () => {
  let component: StringInterpolationeComponent;
  let fixture: ComponentFixture<StringInterpolationeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringInterpolationeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StringInterpolationeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
