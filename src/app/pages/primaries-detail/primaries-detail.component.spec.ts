import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimariesDetailComponent } from './primaries-detail.component';
import { MaterialModule } from '../../shared/material.module';
import { DispositionModule } from '../../components/disposition/disposition.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DamageBreakdownModule } from 'app/components/damage-breakdown/damage-breakdown.module';
import { DamageDisplayModule } from 'app/components/damage-display/damage-display.module';
import { ComponentsDisplayModule } from 'app/components/components-display/components-display.module';

describe('PrimariesDetailComponent', () => {
  let component: PrimariesDetailComponent;
  let fixture: ComponentFixture<PrimariesDetailComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        DispositionModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        DamageBreakdownModule,
        DamageDisplayModule,
        ComponentsDisplayModule
      ],
      declarations: [PrimariesDetailComponent],
      providers: [
        {
          provide: Router,
          useValue: {
            url: 'localhost:4200/primary/Tigris'
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimariesDetailComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
