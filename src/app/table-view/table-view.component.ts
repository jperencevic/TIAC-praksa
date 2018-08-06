import { Component, OnInit, Input } from "@angular/core";
import { Data } from "../../models/data";

@Component({
  selector: "app-table-view",
  templateUrl: "./table-view.component.html",
  styleUrls: ["./table-view.component.css"]
})
export class TableViewComponent implements OnInit {
  @Input() data: Data;

  constructor() {}

  ngOnInit() {}
}
