import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-numberfield",
  templateUrl: "./numberfield.component.html",
  styleUrls: ["./numberfield.component.css"]
})
export class NumberfieldComponent implements OnInit {
  @Input()
  formEl: any;
  @Input() el: any;
  constructor() {}

  ngOnInit() {}
}
