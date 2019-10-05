import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeleeDetailComponent } from './melee-detail.component';
import { MaterialModule } from '../../shared/material.module';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsDisplayModule } from 'app/components/components-display/components-display.module';
import { DamageDisplayModule } from 'app/components/damage-display/damage-display.module';
import { BuildSectionModule } from 'app/components/build-section/build-section.module';
import { WeaponDetailModule } from 'app/components/weapon-detail/weapon-detail.module';

describe('MeleeDetailComponent', () => {
  let component: MeleeDetailComponent;
  let router: Router;
  let fixture: ComponentFixture<MeleeDetailComponent>;

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
      declarations: [MeleeDetailComponent],
      providers: [{
        provide: Router,
        useValue: {
          url: 'localhost:4200/weapons/Amphis'
        }
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeleeDetailComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return damage types', () => {
    const val = component.getDamageTypes(component.melee);
    expect(val).toBeTruthy();
  });
});
