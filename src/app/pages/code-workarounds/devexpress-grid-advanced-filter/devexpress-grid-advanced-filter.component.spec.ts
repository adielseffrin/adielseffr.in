import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevexpressGridAdvancedFilterComponent } from './devexpress-grid-advanced-filter.component';

describe('DevexpressGridAdvancedFilterComponent', () => {
  let component: DevexpressGridAdvancedFilterComponent;
  let fixture: ComponentFixture<DevexpressGridAdvancedFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevexpressGridAdvancedFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevexpressGridAdvancedFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
