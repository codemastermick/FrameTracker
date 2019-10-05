import { TestBed } from "@angular/core/testing";

import { MeleeService } from "./melee.service";

describe("MeleeService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: MeleeService = TestBed.get(MeleeService);
    expect(service).toBeTruthy();
  });

  it("should correct Ceramic Dagger", () => {
    const service: MeleeService = TestBed.get(MeleeService);
    const val = service.getThumb("ceramic-dagger.png");
    expect(val.toString()).toContain("SwordCeramic_d.png");
  });

  it("should correct Dark Split Sword", () => {
    const service: MeleeService = TestBed.get(MeleeService);
    const val = service.getThumb("dark-split-sword.png");
    expect(val.toString()).toContain("DarkSplitSwordDualIcon.png");
  });

  it("should correct Dual Ether", () => {
    const service: MeleeService = TestBed.get(MeleeService);
    const val = service.getThumb("dual-ether.png");
    expect(val.toString()).toContain("Dual_Ether.png");
  });

  it("should correct Galatine", () => {
    const service: MeleeService = TestBed.get(MeleeService);
    const val = service.getThumb("galatine.png");
    expect(val.toString()).toContain("Galatine_o.png");
  });

  it("should correct Wolf Sledge", () => {
    const service: MeleeService = TestBed.get(MeleeService);
    const val = service.getThumb("wolf-sledge.png");
    expect(val.toString()).toContain("Wolf_Sledge_Image.png");
  });
});
