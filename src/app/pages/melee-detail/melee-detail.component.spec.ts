import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeleeDetailComponent } from './melee-detail.component';
import { MaterialModule } from '../../shared/material.module';
import { DispositionModule } from '../../components/disposition/disposition.module';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MeleeDetailComponent', () => {
  let component: MeleeDetailComponent;
  let router: Router;
  let fixture: ComponentFixture<MeleeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule,
        DispositionModule,
        RouterTestingModule,
        BrowserAnimationsModule],
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
});