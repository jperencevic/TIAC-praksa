import { Component, OnInit, Input } from "@angular/core";
import { Options } from "../../models/options";
import { OptionsService } from "../services/options.service";

@Component({
  selector: "app-table-view",
  templateUrl: "./table-view.component.html",
  styleUrls: ["./table-view.component.css"]
})
export class TableViewComponent implements OnInit{
   @Input() option: Options;

  constructor(private optionsService: OptionsService) {}

  ngOnInit() {}


}
