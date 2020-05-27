import { TestBed } from "@angular/core/testing";

import { BitdataService } from "./bitdata.service";

describe("BitdataService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: BitdataService = TestBed.get(BitdataService);
    expect(service).toBeTruthy();
  });

  it("should update serial id", () => {
    const service: BitdataService = TestBed.get(BitdataService);
    service.serialID = "1";
    expect(service.serialID).toEqual("1");
  });
});
