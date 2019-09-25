import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimariesDetailComponent } from './primaries-detail.component';
import { MaterialModule } from '../../shared/material.module';
import { DispositionModule } from '../../components/disposition/disposition.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('PrimariesDetailComponent', () => {
  let component: PrimariesDetailComponent;
  let fixture: ComponentFixture<PrimariesDetailComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, DispositionModule, RouterTestingModule],
      declarations: [PrimariesDetailComponent],
      providers: [
        {
           provide: Router,
           useValue: {
              url: 'localhost:4200/warframes/Ash'
           } // you could use also jasmine.createSpyObj() for methods
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimariesDetailComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
