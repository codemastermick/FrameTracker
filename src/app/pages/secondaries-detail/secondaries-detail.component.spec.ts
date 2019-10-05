import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondariesDetailComponent } from './secondaries-detail.component';
import { MaterialModule } from 'app/shared/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { DamageDisplayModule } from 'app/components/damage-display/damage-display.module';
import { ComponentsDisplayModule } from 'app/components/components-display/components-display.module';
import { BuildSectionModule } from 'app/components/build-section/build-section.module';
import { WeaponDetailModule } from 'app/components/weapon-detail/weapon-detail.module';

describe('SecondariesDetailComponent', () => {
  let component: SecondariesDetailComponent;
  let fixture: ComponentFixture<SecondariesDetailComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        ComponentsDisplayModule,
        BuildSectionModule,
        WeaponDetailModule,
        DamageDisplayModule
      ],
      declarations: [SecondariesDetailComponent],
      providers: [
        {
          provide: Router,
          useValue: {
            url: 'localhost:4200/secondary/Acrid'
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondariesDetailComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
