import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondariesComponent } from './secondaries.component';
import { MaterialModule } from 'app/shared/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { DispositionModule } from 'app/components/disposition/disposition.module';
import { SecondarySummaryComponent } from 'app/components/secondary-summary/secondary-summary.component';
import { Router } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PrimarySummaryModule } from 'app/components/primary-summary/primary-summary.module';
import { SecondarySummaryModule } from 'app/components/secondary-summary/secondary-summary.module';

describe('SecondariesComponent', () => {
  let component: SecondariesComponent;
  let router: Router;
  let fixture: ComponentFixture<SecondariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule,
        DispositionModule,
        ScrollingModule,
        SecondarySummaryModule
      ],
      declarations: [SecondariesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondariesComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a thumbnail URL', () => {
    const val = component.getThumb(component.allSecondaries[0].imageName);
    expect(val).toBeTruthy();
  });

  it('should filter when asked', () => {
    const t = component.allSecondaries[0].type;
    component.filterOn(t);
    expect(component.allSecondaries[0].type === t).toBeTruthy();
  });

  it('should sort by damage per shot when asked', () => {
    component.sortByDamage();
    expect(component.allSecondaries[0].damagePerShot >= component.allSecondaries[10].damagePerShot).toBeTruthy();
  });

  it('should sort by DPS when asked', () => {
    component.sortByDPS();
    expect(component.allSecondaries[0].damagePerSecond <= component.allSecondaries[10].damagePerSecond).toBeTruthy();
  });

  it('should sort by critical chance when asked', () => {
    component.sortByCrit();
    expect(component.allSecondaries[0].criticalChance <= component.allSecondaries[10].criticalChance).toBeTruthy();
  });

  it('should sort by status chance when asked', () => {
    component.sortByProc();
    expect(component.allSecondaries[0].procChance <= component.allSecondaries[10].procChance).toBeTruthy();
  });
});
