import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-line-style",
  templateUrl: "./line-style.component.html",
  styleUrls: ["./line-style.component.css"]
})
export class LineStyleComponent implements OnInit {
 @Input() formEl : any;
 @Input() el: any;
 styles=['solid', 'dashed', 'dotted'];

  constructor() {
  }

  ngOnInit() {}
}
