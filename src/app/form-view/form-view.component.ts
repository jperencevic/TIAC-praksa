import { Component, OnInit, Input } from "@angular/core";
import { Data } from "../../models/data";

@Component({
  selector: "app-form-view",
  templateUrl: "./form-view.component.html",
  styleUrls: ["./form-view.component.css"]
})
export class FormViewComponent implements OnInit {
  @Input() data: Data;

  constructor() {}

  ngOnInit() {}
}
