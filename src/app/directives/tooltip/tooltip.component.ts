import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  @Input() hint: any = ''; 
  @Input() id: any = '';
  defaultVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDefault() {
    this.defaultVisible = !this.defaultVisible;
  }
}
