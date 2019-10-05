import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RelicsComponent } from "./relics.component";
import { MaterialModule } from "app/shared/material.module";
import { RelicSummaryComponent } from "app/components/relic-summary/relic-summary.component";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

describe("RelicsComponent", () => {
  let router: Router;
  let component: RelicsComponent;
  let fixture: ComponentFixture<RelicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
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
});
