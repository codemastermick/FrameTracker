import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimariesComponent } from './primaries.component';
import { MaterialModule } from '../../shared/material.module';
import { DispositionModule } from '../../components/disposition/disposition.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { PrimarySummaryComponent } from 'app/components/primary-summary/primary-summary.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PrimarySummaryModule } from 'app/components/primary-summary/primary-summary.module';

describe('PrimariesComponent', () => {
  let router: Router;
  let component: PrimariesComponent;
  let fixture: ComponentFixture<PrimariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FlexLayoutModule,
        DispositionModule,
        RouterTestingModule,
        ScrollingModule,
        PrimarySummaryModule
      ],
      declarations: [PrimariesComponent]
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

  it('should return a thumbnail URL', () => {
    const val = component.getThumb(component.allPrimaries[0].imageName);
    expect(val).toBeTruthy();
  });

  it('should filter when asked', () => {
    const t = component.allPrimaries[0].type;
    component.filterOn(t);
    expect(component.allPrimaries[0].type === t).toBeTruthy();
  });

  it('should sort by damage per shot when asked', () => {
    component.sortByDamage();
    expect(component.allPrimaries[0].damagePerShot <= component.allPrimaries[10].damagePerShot).toBeTruthy();
  });

  it('should sort by DPS when asked', () => {
    component.sortByDPS();
    expect(component.allPrimaries[0].damagePerSecond <= component.allPrimaries[10].damagePerSecond).toBeTruthy();
  });
});
