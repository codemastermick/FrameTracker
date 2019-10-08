import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SecondarySummaryComponent } from "./secondary-summary.component";
import { MaterialModule } from "app/shared/material.module";
import { RouterTestingModule } from "@angular/router/testing";
import { SafeStyle } from "@angular/platform-browser";
const ACRID = require("../../shared/models/acrid.json");


describe("SecondarySummaryComponent", () => {
  let component: SecondarySummaryComponent;
  let fixture: ComponentFixture<SecondarySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      declarations: [SecondarySummaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondarySummaryComponent);
    component = fixture.componentInstance;
    component.secondary = ACRID;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return a thumbnail URL containing one of the valid images", () => {
    const val: SafeStyle = component.getThumb();
    expect(val.toString()).toContain(ACRID.wikiaThumbnail || ACRID.imageName);
  });

  it("should return a thumbnail URL", () => {
    expect(component.getThumb()).toBeTruthy();
  });

  it("should return DPS", () => {
    expect(component.getDPS()).toBeTruthy();
  });
});
