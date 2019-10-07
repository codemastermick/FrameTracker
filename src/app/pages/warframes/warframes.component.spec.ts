import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WarframesComponent } from "./warframes.component";
import { MaterialModule } from "app/shared/material.module";
import { RouterTestingModule } from "@angular/router/testing";
import { WfSummaryComponent } from "app/components/wf-summary/wf-summary.component";
import { Router } from "@angular/router";
import { ScrollingModule } from "@angular/cdk/scrolling";

describe("WarframesComponent", () => {
  let router: Router;
  let component: WarframesComponent;
  let fixture: ComponentFixture<WarframesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule,
        ScrollingModule
      ],
      declarations: [WarframesComponent, WfSummaryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarframesComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return a thumbnail URL", () => {
    const val = component.getThumb(component.allWarframes[0].imageName);
    expect(val).toBeTruthy();
  });

  it("should filter when asked", () => {
    const t = component.allWarframes[0].type;
    component.filterOn(t);
    expect(component.allWarframes[0].type === t).toBeTruthy();
  });

  it("should sort by armour when asked", () => {
    component.sortByArmour();
    expect(component.allWarframes[0].armor <= component.allWarframes[10].armor).toBeTruthy();
  });

  it("should sort by health when asked", () => {
    component.sortByHealth();
    expect(component.allWarframes[0].health <= component.allWarframes[10].health).toBeTruthy();
  });

  it("should sort by shield when asked", () => {
    component.sortByShield();
    expect(component.allWarframes[0].shield <= component.allWarframes[10].shield).toBeTruthy();
  });

  it("should sort by energy when asked", () => {
    component.sortByEnergy();
    expect(component.allWarframes[0].power <= component.allWarframes[10].power).toBeTruthy();
  });

  it("should reset to the default sort order when asked", () => {
    component.resetFilters();
    expect(component.allWarframes[0].name <= component.allWarframes[10].name).toBeTruthy();
  });
});
