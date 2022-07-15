import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-risks",
  templateUrl: "./risks.component.html",
  styleUrls: ["./risks.component.scss"],
})
export class RisksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = "Risks";
  subtitle = "undertittel";
  content = "innhold";

  boxContent = [this.title, this.subtitle, this.content];
}
