import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Options } from "../../models/options";
import { OptionsService } from "../services/options.service";

@Component({
  selector: "app-live-view",
  templateUrl: "./live-view.component.html",
  styleUrls: ["./live-view.component.css"]
})
export class LiveViewComponent implements OnInit {
  options:Options [];
  selectedOp: Options;
  @Output() eventter = new EventEmitter<Options>();

  constructor(private optionsService: OptionsService) {
  }

  ngOnInit() {
    this.populateOptions();
  }

  populateOptions() {
    this.optionsService.getOptions().subscribe(_ => (this.options = _));
  }

  ExposeSelectedOp() {
    this.eventter.emit(this.selectedOp);
  }

  // setMyStyles() {
  //   let styles = {
  //     color: this.data.color,
  //     "font-size": this.data.fontSize + "px",
  //     "font-weight": this.data.fontWeight,
  //     padding: this.data.padding + "px",
  //     width: this.data.width + "px",
  //     height: this.data.height + "px",
  //     "border-width": this.data.borderWidth + "px",
  //     "border-radius": this.data.borderRadius + "px",
  //     "background-color": this.data.backgroundColor
  //   };
  //   return styles;
  // }
}
