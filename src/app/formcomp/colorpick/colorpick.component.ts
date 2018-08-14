import { Component, OnInit, Input } from '@angular/core';
import { Options } from '../../../models/options';

@Component({
  selector: 'app-colorpick',
  templateUrl: './colorpick.component.html',
  styleUrls: ['./colorpick.component.css']
})
export class ColorpickComponent implements OnInit {
  @Input() formEl: any;
  @Input() el: any;

  constructor() { }

  ngOnInit() {
  }

}
