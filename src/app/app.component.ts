import { Component } from "@angular/core";
import { Data } from "../models/data";
import { DataService } from "./services/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  testObject: Data;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
     this.dataService.getData().subscribe(_ => this.testObject=_[0]);
  }

  // testObject: Data = {
  //   tagName: "div",
  //   color: "#ec9393",
  //   fontSize: 30,
  //   fontWeight: 700,
  //   padding: 10,
  //   height: 300,
  //   width: 300,
  //   borderWidth: 3,
  //   borderRadius: 7,
  //   backgroundColor: "#d23030"
  // };
}
