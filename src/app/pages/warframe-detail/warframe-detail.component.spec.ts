import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarframeDetailComponent } from './warframe-detail.component';
import { MaterialModule } from 'app/shared/material.module';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('WarframesDetailComponent', () => {
  let component: WarframeDetailComponent;
  let fixture: ComponentFixture<WarframeDetailComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule,
        RouterTestingModule,
        BrowserAnimationsModule],
      declarations: [WarframeDetailComponent],
      providers: [
        {
          provide: Router,
          useValue: {
            url: 'localhost:4200/warframes/Ash'
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarframeDetailComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
