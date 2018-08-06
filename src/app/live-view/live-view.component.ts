import { Component, OnInit, Input } from "@angular/core";
import { Data } from "../../models/data";

@Component({
  selector: "app-live-view",
  templateUrl: "./live-view.component.html",
  styleUrls: ["./live-view.component.css"]
})
export class LiveViewComponent implements OnInit {
  @Input() data: Data;

  constructor() {}

  ngOnInit() {}

  setMyStyles() {
    let styles = {
      color: this.data.color,
      "font-size": this.data.fontSize + "px",
      "font-weight": this.data.fontWeight,
      padding: this.data.padding + "px",
      width: this.data.width + "px",
      height: this.data.height + "px",
      "border-width": this.data.borderWidth + "px",
      "border-radius": this.data.borderRadius + "px",
      "background-color": this.data.backgroundColor
    };
    return styles;
  }
}
