import { Component, OnInit } from "@angular/core";
import { Options } from "../../models/options";
import { Elements } from "../../models/elements";
import { OptionsService } from "../services/options.service";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.css"]
})
export class ContainerComponent implements OnInit {
  activeOption = new Options();
  activeElement = new Elements() || null;
  constructor(private optionsService: OptionsService) {}

  ngOnInit() {}

  onNew(selected: Options) {
    this.activeOption = selected;
    this.activeElement = { _id: "", objectType: "", settings: {} };
  }

  getEl(event) {
    this.activeElement = event.element;
    // this.optionsService
    //   .getOp(this.activeElement.objectType)
    //   .subscribe(_ => (this.activeOption = _));
    this.activeOption= event.option;
  }
}
