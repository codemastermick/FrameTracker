import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimariesComponent } from './primaries.component';
import { MaterialModule } from '../../shared/material.module';
import { DispositionModule } from '../../components/disposition/disposition.module';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('PrimariesComponent', () => {
  let component: PrimariesComponent;
  let fixture: ComponentFixture<PrimariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FlexLayoutModule, DispositionModule],
      declarations: [PrimariesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
