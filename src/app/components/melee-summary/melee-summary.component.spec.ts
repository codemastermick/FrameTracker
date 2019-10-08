import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MeleeSummaryComponent } from "./melee-summary.component";
import { MaterialModule } from "app/shared/material.module";
import { RouterTestingModule } from "@angular/router/testing";
import { DeferLoadModule } from "app/shared/defer-load-directive";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { MeleeModule } from "app/pages/melee/melee.module";
import { SafeStyle } from "@angular/platform-browser";
const AMPHIS = require("../../shared/models/amphis.json");

describe("MeleeSummaryComponent", () => {
  let component: MeleeSummaryComponent;
  let fixture: ComponentFixture<MeleeSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule, DeferLoadModule, ScrollingModule, MeleeModule],
      declarations: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeleeSummaryComponent);
    component = fixture.componentInstance;
    component.melee = AMPHIS;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return a thumbnail URL containing one of the valid images", () => {
    const val: SafeStyle = component.getThumb();
    expect(val.toString()).toContain(AMPHIS.wikiaThumbnail || AMPHIS.imageName);
  });

  it("should return a thumbnail URL", () => {
    expect(component.getThumb()).toBeTruthy();
  });

  it("should return DPS", () => {
    expect(component.getDPS()).toBeTruthy();
  });
});
