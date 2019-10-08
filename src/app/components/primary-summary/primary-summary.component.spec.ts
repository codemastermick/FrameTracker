import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MaterialModule } from "app/shared/material.module";
import { PrimarySummaryComponent } from "./primary-summary.component";
import { RouterTestingModule } from "@angular/router/testing";
import { SafeStyle } from "@angular/platform-browser";
const TIGRIS = require("../../shared/models/tigris.json");

describe("PrimarySummaryComponent", () => {
  let component: PrimarySummaryComponent;
  let fixture: ComponentFixture<PrimarySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      declarations: [PrimarySummaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarySummaryComponent);
    component = fixture.componentInstance;
    component.primary = TIGRIS;
    fixture.detectChanges();
  });

  it("should create", async(() => {
    expect(component).toBeTruthy();
  }));

  it("should return a thumbnail URL containing one of the valid images", () => {
    const val: SafeStyle = component.getThumb();
    expect(val.toString()).toContain(TIGRIS.wikiaThumbnail || TIGRIS.imageName);
  });

  it("should return a thumbnail URL", () => {
    expect(component.getThumb()).toBeTruthy();
  });

  it("should return DPS", () => {
    expect(component.getDPS()).toBeTruthy();
  });
});
