import { Component, OnInit } from "@angular/core";
import { Options } from "../../models/options";
import { Elements } from "../../models/elements";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.css"]
})
export class ContainerComponent implements OnInit {
  activeOption = new Options();
  activeElement = new Elements() || null;
  constructor() {}

  ngOnInit() {}

  onNew(selected: Options) {
    this.activeOption = selected;
    this.activeElement = { _id: "", objectType: "", settings: {} };
  }

  getEl(event) {
    this.activeElement = event.element;
    this.activeOption= event.option;
  }
}
