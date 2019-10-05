import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RelicsDetailComponent } from "./relics-detail.component";
import { MaterialModule } from "app/shared/material.module";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("RelicsDetailComponent", () => {
  let component: RelicsDetailComponent;
  let fixture: ComponentFixture<RelicsDetailComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule,
        RouterTestingModule,
        BrowserAnimationsModule],
      declarations: [RelicsDetailComponent],
      providers: [
        {
          provide: Router,
          useValue: {
            url: "localhost:4200/relics/Axi%20A1%20Exceptional"
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelicsDetailComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
