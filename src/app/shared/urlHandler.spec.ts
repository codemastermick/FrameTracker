import { TestBed } from "@angular/core/testing";

import { formatUrl } from "./urlHandler";

describe("URL Handler", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  const input = "ack%20& brunt";

  it("should be uppercase the first letter of each word", () => {
    const res = formatUrl(input);
    expect(res).toEqual("Ack & Brunt");
  });

  it("should not contain HTML spaces", () => {
    const res = formatUrl(input);
    expect(res).not.toContain("%20");
  });
});
