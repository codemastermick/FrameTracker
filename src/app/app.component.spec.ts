import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./shared/material.module";
import { NavigationEnd, Router, NavigationStart, NavigationCancel, NavigationError } from "@angular/router";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'The Sanctuary'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("The Sanctuary");
  });

  it("should display the spinner while loading", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    const event = new NavigationStart(42, "/");
    TestBed.get(Router).events.next(event);

    expect(app.loading).toBeTruthy();
  });

  it("should hide the spinner after loading", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    const event = new NavigationEnd(42, "/", "/");
    TestBed.get(Router).events.next(event);

    expect(app.loading).toBeFalsy();
  });

  it("should hide the spinner on load cancel", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    const event = new NavigationCancel(42, "/", "/");
    TestBed.get(Router).events.next(event);

    expect(app.loading).toBeFalsy();
  });

  it("should hide the spinner on navigation error", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    const event = new NavigationError(42, "/", "/");
    TestBed.get(Router).events.next(event);

    expect(app.loading).toBeFalsy();
  });
});
