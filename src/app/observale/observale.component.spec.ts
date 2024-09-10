import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservaleComponent } from './observale.component';

describe('ObservaleComponent', () => {
  let component: ObservaleComponent;
  let fixture: ComponentFixture<ObservaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
