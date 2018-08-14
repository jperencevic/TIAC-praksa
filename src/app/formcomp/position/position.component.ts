import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {
  @Input() formEl: any;
  @Input() el: any;
  positions= ['center', 'top', 'bottom', 'left', 'right']
  constructor() { }

  ngOnInit() {
  }

}
