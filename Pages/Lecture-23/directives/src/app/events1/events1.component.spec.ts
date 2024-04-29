import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Events1Component } from './events1.component';

describe('Events1Component', () => {
  let component: Events1Component;
  let fixture: ComponentFixture<Events1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Events1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Events1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
