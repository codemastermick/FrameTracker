import { TestBed } from "@angular/core/testing";

import { WfDataService } from "./wf-data.service";

describe("WfDataService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: WfDataService = TestBed.get(WfDataService);
    expect(service).toBeTruthy();
  });

  it("should correct Equinox", () => {
    const service: WfDataService = TestBed.get(WfDataService);
    const val = service.getThumb("equinox.png");
    expect(val.toString()).toContain("EquinoxIcon64.png");
  });

  it("should correct Equinox Prime", () => {
    const service: WfDataService = TestBed.get(WfDataService);
    const val = service.getThumb("equinox-prime.png");
    expect(val.toString()).toContain("EquinoxPrimeIcon64.png");
  });

  it("should correct Wukong Prime", () => {
    const service: WfDataService = TestBed.get(WfDataService);
    const val = service.getThumb("wukong-prime.png");
    expect(val.toString()).toContain("WukongPrimeIcon64.png");
  });

  it("should correct Chroma Prime", () => {
    const service: WfDataService = TestBed.get(WfDataService);
    const val = service.getThumb("https://vignette.wikia.nocookie.net/warframe/images/f/f2/ChromaPrime.png/revision/latest?cb=20180925193634");
    expect(val.toString()).toContain("ChromaPrimeIcon64.png");
  });
});
