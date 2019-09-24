import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelicsDetailComponent } from './relics-detail.component';
import { MaterialModule } from 'app/shared/material.module';

describe('RelicsDetailComponent', () => {
  let component: RelicsDetailComponent;
  let fixture: ComponentFixture<RelicsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [RelicsDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelicsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
