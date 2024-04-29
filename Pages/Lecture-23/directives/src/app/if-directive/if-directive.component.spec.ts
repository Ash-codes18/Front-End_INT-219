import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfDirectiveComponent } from './if-directive.component';

describe('IfDirectiveComponent', () => {
  let component: IfDirectiveComponent;
  let fixture: ComponentFixture<IfDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfDirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IfDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
