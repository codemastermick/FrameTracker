import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimariesComponent } from './primaries.component';
import { MaterialModule } from '../../shared/material.module';
import { DispositionModule } from '../../components/disposition/disposition.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { PrimarySummaryComponent } from 'app/components/primary-summary/primary-summary.component';

describe('PrimariesComponent', () => {
  let router: Router;
  let component: PrimariesComponent;
  let fixture: ComponentFixture<PrimariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FlexLayoutModule, DispositionModule, RouterTestingModule],
      declarations: [PrimariesComponent, PrimarySummaryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimariesComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
