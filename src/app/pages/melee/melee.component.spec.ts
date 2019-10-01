import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeleeComponent } from './melee.component';
import { MaterialModule } from 'app/shared/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { MeleeSummaryComponent } from 'app/components/melee-summary/melee-summary.component';
import { DispositionModule } from 'app/components/disposition/disposition.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

describe('MeleeComponent', () => {
  let router: Router;
  let component: MeleeComponent;
  let fixture: ComponentFixture<MeleeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, DispositionModule, ScrollingModule],
      declarations: [MeleeComponent, MeleeSummaryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeleeComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
