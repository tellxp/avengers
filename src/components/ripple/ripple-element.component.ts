import {Component, ElementRef, HostBinding, OnChanges, Optional, ViewEncapsulation} from '@angular/core';
import {DomService} from '../core/dom.service';
import {AnimationPlayer} from '@angular/animations';


@Component({
  selector: 'ave-ripple-element',
  templateUrl: './ripple-element.component.html',
  styleUrls: ['./ripple-element.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DomService]
})
export class RippleElementComponent implements OnChanges {
  public player: AnimationPlayer;

  @HostBinding('class.v-ripple-element') 'true';
  constructor(public elementRef: ElementRef, domService: DomService) {
  }

  ngOnChanges() {

  }


}
