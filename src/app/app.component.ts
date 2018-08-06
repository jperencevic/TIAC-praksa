import { Component } from "@angular/core";
import { Data } from "../models/data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  testObject: Data = {
    tagName: "div",
    color: "#ec9393",
    fontSize: 30,
    fontWeight: 700,
    padding: 10,
    height: 300,
    width: 300,
    borderWidth: 3,
    borderRadius: 7,
    backgroundColor: "#d23030"
  };
}
