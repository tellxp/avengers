import {
  Component, ElementRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, Optional, Renderer2,
  ViewEncapsulation
} from '@angular/core';
import {DomService} from '../core/dom.service';
import {AnimationPlayer, transition, trigger, useAnimation} from '@angular/animations';
import {WidgetPosition, WidgetStyle} from '../core/widget.component';
import {scaleIn} from '../animation/scale-animations';
import {fadeout} from '../animation/fade-animations';


@Component({
  selector: 'ave-ripple-element',
  templateUrl: './ripple-element.component.html',
  styleUrls: ['./ripple-element.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('ripple', [
      transition('void => *',
        useAnimation(scaleIn, {
          params: {
            start: 'scale(0)',
            duration: '560ms',
            end: 'scale(1)'
          }
        })
      ),
      transition('* => void',
        useAnimation(fadeout, {
          params: {
            start: '1',
            duration: '560ms',
            end: '0'
          }
        })
      )
    ])
  ],
  providers: [DomService]
})
export class RippleElementComponent implements OnInit, OnDestroy {

  @HostBinding('class.v-ripple-element') 'true';
  @HostBinding('@ripple') rippleAnimations = 'true';
  @Input() ripplePosition: WidgetPosition;
  @Input() rippleStyle: WidgetStyle;

  constructor(public elementRef: ElementRef, domService: DomService, private render: Renderer2) {

  }

  ngOnInit() {
    this.render.setStyle(this.elementRef.nativeElement, 'top', `${this.ripplePosition.top}px`);
    this.render.setStyle(this.elementRef.nativeElement, 'left', `${this.ripplePosition.left}px`);
    this.render.setStyle(this.elementRef.nativeElement, 'width', `${this.rippleStyle.width}px`);
    this.render.setStyle(this.elementRef.nativeElement, 'height', `${this.rippleStyle.height}px`);
  }
  ngOnDestroy() {

  }


}
