import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MeleeComponent } from "./melee.component";
import { MaterialModule } from "app/shared/material.module";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { DispositionModule } from "app/components/disposition/disposition.module";
import { MeleeSummaryModule } from "app/components/melee-summary/melee-summary.module";
import { ScrollingModule } from "@angular/cdk/scrolling";

describe("MeleeComponent", () => {
  let router: Router;
  let component: MeleeComponent;
  let fixture: ComponentFixture<MeleeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule,
        DispositionModule,
        MeleeSummaryModule,
        ScrollingModule
      ],
      declarations: [MeleeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeleeComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return a thumbnail URL", () => {
    const val = component.getThumb(component.allMelees[0].imageName);
    expect(val).toBeTruthy();
  });

  it("should filter when asked", () => {
    const t = component.allMelees[0].type;
    component.filterOn(t);
    expect(component.allMelees[0].type === t).toBeTruthy();
  });

  it("should sort by damage per shot when asked", () => {
    component.sortByDamage();
    expect(component.allMelees[0].damagePerShot >= component.allMelees[10].damagePerShot).toBeTruthy();
  });

  it("should sort by DPS when asked", () => {
    component.sortByDPS();
    expect(component.allMelees[0].damagePerSecond <= component.allMelees[10].damagePerSecond).toBeTruthy();
  });

  it("should sort by critical chance when asked", () => {
    component.sortByCrit();
    expect(component.allMelees[0].criticalChance <= component.allMelees[10].criticalChance).toBeTruthy();
  });

  it("should sort by status chance when asked", () => {
    component.sortByProc();
    expect(component.allMelees[0].procChance <= component.allMelees[10].procChance).toBeTruthy();
  });
});
