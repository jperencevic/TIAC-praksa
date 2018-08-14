import { Component, OnInit, Input } from "@angular/core";
import { Options } from "../../models/options";
import { Elements } from "../../models/elements";

@Component({
  selector: "app-table-view",
  templateUrl: "./table-view.component.html",
  styleUrls: ["./table-view.component.css"]
})
export class TableViewComponent implements OnInit{
   @Input() option: Options;
   @Input() element: Elements;

  constructor() {}

  ngOnInit() {}

  getSettngs(s: any): string{
    if (this.element._id){
      return this.element.settings [s.name];
    }
    return s.defaultValue;
  }


}
