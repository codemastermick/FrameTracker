import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondariesDetailComponent } from './secondaries-detail.component';
import { MaterialModule } from 'app/shared/material.module';
import { DispositionModule } from 'app/components/disposition/disposition.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

describe('SecondariesDetailComponent', () => {
  let component: SecondariesDetailComponent;
  let fixture: ComponentFixture<SecondariesDetailComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule,
        DispositionModule,
        RouterTestingModule,
        BrowserAnimationsModule],
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
