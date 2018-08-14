import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['./font.component.css']
})
export class FontComponent implements OnInit {
  @Input() formEl: any;
  @Input() el: any;
  fonts = ["Times New Roman"]
  constructor() { }

  ngOnInit() {
  }

}
