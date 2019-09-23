import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimariesDetailComponent } from './primaries-detail.component';
import { MaterialModule } from 'app/shared/material.module';

describe('PrimariesDetailComponent', () => {
  let component: PrimariesDetailComponent;
  let fixture: ComponentFixture<PrimariesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [PrimariesDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimariesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
