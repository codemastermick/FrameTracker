import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WarframesComponent } from "./warframes.component";
import { MaterialModule } from "app/shared/material.module";
import { RouterTestingModule } from "@angular/router/testing";
import { WfSummaryComponent } from "app/components/wf-summary/wf-summary.component";
import { Router } from "@angular/router";

describe("WarframesComponent", () => {
  let router: Router;
  let component: WarframesComponent;
  let fixture: ComponentFixture<WarframesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
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
});
