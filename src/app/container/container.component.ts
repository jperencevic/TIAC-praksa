import { Component, OnInit } from "@angular/core";
import { Options } from "../../models/options";
import { Elements } from "../../models/elements";
import { OptionsService } from "../services/options.service";
import { ElementsService } from "../services/elements.service";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.css"]
})
export class ContainerComponent implements OnInit {
  activeOp = new Options();
  activeEl = new Elements();
  constructor(
    private optionsService: OptionsService,
    private elementsService: ElementsService
  ) {}

  ngOnInit() {}

  onNew(selected: Options) {
    this.activeOp = selected;
    this.activeEl = { _id: "", objectType: "", settings: {} };
  }

  getEl(element: string) {
    this.elementsService.getEl(element).subscribe(_ => {
      this.activeEl = _;
      this.optionsService
        .getOp(this.activeEl.objectType)
        .subscribe(_ => (this.activeOp = _));
    });
  }
}
