import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Options } from "../../models/options";
import { OptionsService } from "../services/options.service";
import { ElementsService } from "../services/elements.service";
import { Elements } from "../../models/elements";

@Component({
  selector: "app-live-view",
  templateUrl: "./live-view.component.html",
  styleUrls: ["./live-view.component.css"]
})
export class LiveViewComponent implements OnInit {
  options: Options[];
  selectedOp: Options;

  elements: Elements[];
  selectedEl: Elements;

  @Input()
  element: Elements;
  @Output()
  eventter = new EventEmitter<Options>();
  @Output()
  elEvent = new EventEmitter<Elements>();

  constructor(
    private optionsService: OptionsService,
    private elementsService: ElementsService
  ) {
  }

  ngOnInit() {
    this.populateOptions();
    this.populateElements();
  }

  populateOptions() {
    this.optionsService.getOptions().subscribe(_ => (this.options = _));
  }

  populateElements() {
    this.elementsService.getElements().subscribe(_ => (this.elements = _));
  }

  ExposeSelectedOp() {
    this.eventter.emit(this.selectedOp);
  }

  onChange(event): void {
    this.selectedEl = event.target.value || "";
    this.elEvent.emit(this.selectedEl);
  }

  SaveElement() {
    this.elementsService.addElement(this.selectedOp).subscribe();
    this.ngOnInit();

  }
  DeleteElement(){
    this.elementsService.deleteEl(this.element._id).subscribe();
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
