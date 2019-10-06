import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RelicsComponent } from "./relics.component";
import { MaterialModule } from "app/shared/material.module";
import { RelicSummaryComponent } from "app/components/relic-summary/relic-summary.component";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { Item } from "warframe-items";

const AXI1: Item = {
  uniqueName: "/Lotus/Types/Game/Projections/T4VoidProjectionESilver",
  name: "Axi A1 Exceptional",
  description: "An artifact containing Orokin secrets. It can only be opened through the power of the Void.",
  type: "Relic",
  imageName: "axi-exceptional.png",
  category: "Relics",
  tradable: true
};

describe("RelicsComponent", () => {
  let router: Router;
  let component: RelicsComponent;
  let fixture: ComponentFixture<RelicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule,
        ScrollingModule
      ],
      declarations: [RelicsComponent, RelicSummaryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelicsComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return a thumbnail", () => {
    expect(component.getThumb(AXI1.name)).toBeTruthy();
  });

  it("should reset filters when asked", () => {
    component.resetFilters();
    expect(component.allRelics[0].name <= component.allRelics[10].name).toBeTruthy();
  });

  it("should filter by type", () => {
    component.filterOn("Lith");
    expect(component.allRelics[0].name.includes("Lith")).toBeTruthy();
    expect(component.allRelics[0].name.includes("Meso")).toBeFalsy();
  });

  it("should sort by Intact when asked", () => {
    component.sortByIntact();
    expect(component.allRelics.every(x => {
      return x.name.includes("Intact");
    })).toBeTruthy();
  });

  it("should sort by Exceptional when asked", () => {
    component.sortByExceptional();
    expect(component.allRelics.every(x => {
      return x.name.includes("Exceptional");
    })).toBeTruthy();
  });

  it("should sort by Flawless when asked", () => {
    component.sortByFlawless();
    expect(component.allRelics.every(x => {
      return x.name.includes("Flawless");
    })).toBeTruthy();
  });

  it("should sort by Radiant when asked", () => {
    component.sortByRadiant();
    expect(component.allRelics.every(x => {
      return x.name.includes("Radiant");
    })).toBeTruthy();
  });
});
