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
  ) {
    this.selectedOption = new Options();
    this.selectedElement = new Elements();
  }

  ngOnInit() {
    this.selectedElement = new Elements();
    this.populateOptions();
    this.populateElements();
  }

  populateOptions() {
    this.optionsService.getOptions().subscribe(_ => (this.options = _));
  }

  populateElements() {
    this.elementsService.getElements().subscribe(_ => (this.elements = _));
  }

  ShowOptionsSelections() {
    this.showSelectOptions = true;
    this.selectedElement = null;
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
    this.elementsService.addElement(this.selectedOption).subscribe(_ => {
      this.selectedElement = _;
      // this.options.filter(option => {
      //   if (option.objectType == this.selectedElement.objectType)
      //     this.selectedOption = option;
      // });
      console.log(this.selectedElement);
      this.populateElements();
      this.selectedElementExists = true;
    });

    this.showSelectOptions = false;
    this, (this.selectedElementExists = false);
    // this.elEvent.emit({
    //   element: this.selectedElement,
    //   option: this.selectedOption
    // });
  }
  DeleteElement() {
    this.elementsService.deleteEl(this.selectedElement._id).subscribe(_ =>
      // this.elementsService.getElements().subscribe(_ => {
      //   this.elements = _;

      // }) 
      {
        alert(`Element  ${this.selectedElement.settings.name}  has been deleted`);
        this.populateElements();
        this.elEvent.emit({element:{ _id: "", objectType: "", settings: {}}, option:{ _id: "", objectType: "", settings: [""]}});
      }
    );
  }

  UpdateElement() {
    this.elementsService.updateElement(this.selectedElement).subscribe();
    // this.elementsService.getElements().subscribe(_ => (this.elements = _));
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
