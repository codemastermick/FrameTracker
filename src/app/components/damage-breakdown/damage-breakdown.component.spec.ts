import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DamageBreakdownComponent } from "./damage-breakdown.component";
import { MaterialModule } from "app/shared/material.module";
const AMPHIS = require("../../shared/models/amphis.json");

describe("DamageBreakdownComponent", () => {
  let component: DamageBreakdownComponent;
  let fixture: ComponentFixture<DamageBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [DamageBreakdownComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageBreakdownComponent);
    component = fixture.componentInstance;
    component.weapon = AMPHIS;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
