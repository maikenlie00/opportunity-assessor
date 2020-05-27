import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BitdataService {
  private _serialID: string = "CNQ";
  constructor() {}

  get serialID(): string {
    return this._serialID;
  }

  set serialID(value: string) {
    this._serialID = value;
  }
}
