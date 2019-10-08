import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RelicSummaryComponent } from "./relic-summary.component";
import { RouterTestingModule } from "@angular/router/testing";
import { MaterialModule } from "app/shared/material.module";
const AXI1 = require("../../shared/models/axiA1.json");

describe("RelicSummaryComponent", () => {
  let component: RelicSummaryComponent;
  let fixture: ComponentFixture<RelicSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      declarations: [RelicSummaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelicSummaryComponent);
    component = fixture.componentInstance;
    component.relic = AXI1;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
