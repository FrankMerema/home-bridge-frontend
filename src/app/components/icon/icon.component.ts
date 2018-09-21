import {Component, Input} from '@angular/core';

@Component({
  selector: 'hb-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() name: string;
  @Input() className: string;
}

