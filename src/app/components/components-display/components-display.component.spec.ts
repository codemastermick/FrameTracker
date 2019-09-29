import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsDisplayComponent } from './components-display.component';

describe('ComponentsDisplayComponent', () => {
  let component: ComponentsDisplayComponent;
  let fixture: ComponentFixture<ComponentsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
