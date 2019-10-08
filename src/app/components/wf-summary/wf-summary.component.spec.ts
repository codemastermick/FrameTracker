import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WfSummaryComponent } from "./wf-summary.component";
import { MaterialModule } from "app/shared/material.module";
import { RouterTestingModule } from "@angular/router/testing";
const ASH = require("../../shared/models/ash.json");

describe("WfSummaryComponent", () => {
  let component: WfSummaryComponent;
  let fixture: ComponentFixture<WfSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      declarations: [WfSummaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WfSummaryComponent);
    component = fixture.componentInstance;
    component.frame = ASH;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
