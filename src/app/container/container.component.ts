import { Component, OnInit } from '@angular/core';
import { Options } from '../../models/options';
import { OptionsService } from '../services/options.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  active = new Options();
  constructor(private optionsService: OptionsService) { }

  ngOnInit() {
  }

  onNew(selected: Options) {
    // this.optionsService.getOp(selected).subscribe(_ => this.active = _);
    this.active = selected;
  }

}
