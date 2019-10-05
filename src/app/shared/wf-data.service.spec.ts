import { TestBed } from "@angular/core/testing";

import { WfDataService } from "./wf-data.service";

describe("WfDataService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: WfDataService = TestBed.get(WfDataService);
    expect(service).toBeTruthy();
  });
});
