import { Component, OnInit, Input } from "@angular/core";
import { Options } from "../../models/options";

@Component({
  selector: "app-form-view",
  templateUrl: "./form-view.component.html",
  styleUrls: ["./form-view.component.css"]
})
export class FormViewComponent implements OnInit {
  @Input() option: Options;

  constructor() {}

  ngOnInit() {}
}
