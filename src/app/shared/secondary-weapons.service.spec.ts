import { TestBed } from "@angular/core/testing";

import { SecondaryWeaponsService } from "./secondary-weapons.service";

describe("SecondaryWeaponsService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: SecondaryWeaponsService = TestBed.get(SecondaryWeaponsService);
    expect(service).toBeTruthy();
  });

  it("should be return a filtered list when asked", () => {
    const service: SecondaryWeaponsService = TestBed.get(SecondaryWeaponsService);
    expect(service.getAllOfType("Pistol")).toBeTruthy();
  });
});
