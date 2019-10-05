import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PrimariesDetailComponent } from "./primaries-detail.component";
import { MaterialModule } from "../../shared/material.module";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentsDisplayModule } from "app/components/components-display/components-display.module";
import { BuildSectionModule } from "app/components/build-section/build-section.module";
import { WeaponDetailModule } from "app/components/weapon-detail/weapon-detail.module";
import { DamageDisplayModule } from "app/components/damage-display/damage-display.module";

describe("PrimariesDetailComponent", () => {
  let component: PrimariesDetailComponent;
  let fixture: ComponentFixture<PrimariesDetailComponent>;
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
      declarations: [PrimariesDetailComponent],
      providers: [
        {
          provide: Router,
          useValue: {
            url: "localhost:4200/primary/Tigris"
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

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
