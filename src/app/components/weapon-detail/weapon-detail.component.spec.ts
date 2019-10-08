import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WeaponDetailComponent } from "./weapon-detail.component";
import { MaterialModule } from "app/shared/material.module";
import { DispositionModule } from "../disposition/disposition.module";
import { DamageBreakdownModule } from "../damage-breakdown/damage-breakdown.module";
const TIGRIS = require("../../shared/models/tigris.json");

describe("WeaponDetailComponent", () => {
  let component: WeaponDetailComponent;
  let fixture: ComponentFixture<WeaponDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        DispositionModule,
        DamageBreakdownModule
      ],
      declarations: [WeaponDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponDetailComponent);
    component = fixture.componentInstance;
    component.weapon = TIGRIS;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
