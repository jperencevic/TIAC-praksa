import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.css']
})
export class BooleanComponent implements OnInit {
  @Input() formEl:any;
  @Input() el: any;
  constructor() { }

  ngOnInit() {
  }

}
