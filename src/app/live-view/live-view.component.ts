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
  showSelectOptions: boolean = false;
  options: Options[];
  selectedOption: Options;
  selectedOptionExists: boolean = false;

  elements: Elements[];
  selectedElement: Elements;
  selectedElementExists: boolean = false;

  @Output()
  eventter = new EventEmitter<Options>();
  @Output()
  elEvent = new EventEmitter<{ element: Elements; option: Options }>();

  constructor(
    private optionsService: OptionsService,
    private elementsService: ElementsService
  ) {}

  ngOnInit() {
    this.populateOptions();
    this.populateElements();
  }

  populateOptions() {
    this.optionsService.getOptions().subscribe(_ => (this.options = _));
  }

  populateElements() {
    this.elementsService.getElements().subscribe(elements => {
      this.elements = elements;
      this.selectedElement = null;
    });
  }

  ShowOptionsSelections() {
    this.selectedOption = null;
    this.showSelectOptions = true;
    this.selectedElement = null;
    this.deleteFormAndTable();
  }
  ExposeSelectedOp() {
    this.selectedElement = null;
    this.eventter.emit(this.selectedOption);
    this.selectedOptionExists = true;
  }

  onChange(): void {
    this.showSelectOptions = false;
    this.selectedOptionExists = false;
    this.selectedElementExists = true;

    this.options.filter(option => {
      if (option.objectType == this.selectedElement.objectType)
        this.selectedOption = option;
    });
    this.elEvent.emit({
      element: this.selectedElement,
      option: this.selectedOption
    });
  }

  SaveElement() {
    this.elementsService.addElement(this.selectedOption).subscribe(element => {
      this.elements.push(element);
      this.selectedElement = element;

      this.elEvent.emit({
        element: this.selectedElement,
        option: this.selectedOption
      });

      this.selectedElementExists = true;
      this.showSelectOptions = false;
    });
  }

  DeleteElement() {
    this.elementsService.deleteEl(this.selectedElement._id).subscribe(_ => {
      alert(`Element  ${this.selectedElement.settings.name}  has been deleted`);
      this.populateElements();
      this.deleteFormAndTable();
      this.selectedElementExists = false;
    });
  }

  UpdateElement() {
    console.log(this.selectedElement);
    this.elementsService.updateElement(this.selectedElement).subscribe();
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

  deleteFormAndTable() {
    this.elEvent.emit({
      element: { _id: "", objectType: "", settings: {} },
      option: { _id: "", objectType: "", settings: [""] }
    });
  }
}
