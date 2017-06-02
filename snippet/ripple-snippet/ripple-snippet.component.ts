import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {WidgetComponent, WidgetPosition, WidgetStyle} from '../../components/core/widget.component';
import {DomService} from '../../components/core/dom.service';
import {ArcylicMotionComponent} from '../../components/acrylic/arcylic-motion.component';

@Component({
  selector: 'ave-ripple',
  templateUrl: 'src/snippet/ripple-snippet/ripple.component.html',
  styleUrls: ['src/snippet/ripple-snippet/ripple.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DomService]
})
export class RippleComponent implements OnChanges {

  @Input() stateTrigger: string;
  @Input() hostStyle: WidgetStyle;
  @Input() rippleStartPosition: WidgetPosition;

  @ViewChild(ArcylicMotionComponent) viewArcylicMotion: ArcylicMotionComponent;
  rippleRadius: number;
  rippleElementPosition: WidgetPosition;
  rippleElementStyle: WidgetStyle;

  rippleInStyles = new Map<string, string>();
  rippleOutStyles = new Map<string, string>();

  @HostBinding('class.v-ripple') rippleCssClass = 'true';

  @HostListener('animationstart') OnAnimationStart() {
  }

  @HostListener('animationend') OnAnimationEnd() {
    if (this.stateTrigger === 'end') {
      this.clearStyles();
    }
  }

  constructor(private elementRef: ElementRef, private render: Renderer2) {

  }

  ngOnChanges(changes: SimpleChanges) {
    const state = changes['stateTrigger'];
    if (state) {
      if (state.currentValue === 'start') {
        this.rippleRadius = WidgetComponent.calculateIntersectCircleRadius(this.rippleStartPosition, this.hostStyle);
        this.rippleElementPosition = WidgetComponent.calculateIntersectCirclePosition(this.rippleStartPosition, this.hostStyle);
        this.rippleElementStyle = new WidgetStyle(this.rippleRadius * 2, this.rippleRadius * 2);
        this.rippleIn();
      }
      if (state.currentValue === 'end') {
        this.rippleOut();
      }
    }

  }

  composeRippleInStyles() {
    this.rippleInStyles.set('top', `${this.rippleElementPosition.top}px`);
    this.rippleInStyles.set('left', `${this.rippleElementPosition.left}px`);
    this.rippleInStyles.set('width', `${this.rippleElementStyle.width}px`);
    this.rippleInStyles.set('height', `${this.rippleElementStyle.height}px`);
    this.rippleInStyles.set('animation-name', 'scale-in');
    this.rippleInStyles.set('animation-duration', '280ms');
    this.rippleInStyles.set('animation-timing-function', 'cubic-bezier(0,0,0.2,1)');
    this.rippleInStyles.set('animation-delay', '0s');
    this.rippleInStyles.set('animation-iteration-count', '1');
    this.rippleInStyles.set('animation-direction', 'alternate');
    this.rippleInStyles.set('animation-play-state', 'running');
    this.rippleInStyles.set('animation-fill-mode', 'forwards');
    this.rippleInStyles.set('background-color', 'rgba(255, 255, 255, 0.618)');
    this.rippleInStyles.set('border-radius', '50%');
  }

  composeRippleOutStyles() {
    this.rippleOutStyles.set('animation-name', 'fade-out');
    this.rippleOutStyles.set('animation-duration', '560ms');
    this.rippleOutStyles.set('animation-timing-function', 'cubic-bezier(0,0,0.2,1)');
    this.rippleOutStyles.set('animation-delay', '0s');
    this.rippleOutStyles.set('animation-iteration-count', '1');
    this.rippleOutStyles.set('animation-direction', 'alternate');
    this.rippleOutStyles.set('animation-play-state', 'running');
    this.rippleOutStyles.set('animation-fill-mode', 'none');
    this.rippleOutStyles.set('background-color', 'rgba(255, 255, 255, 0.618)');
  }

  rippleIn() {
    this.composeRippleInStyles();
    this.rippleInStyles.forEach(
      (value, name) => {
        this.render.setStyle(this.viewArcylicMotion.elementRef.nativeElement, name, value);
      }
    );
  }

  rippleOut() {
    this.composeRippleOutStyles();

    this.rippleOutStyles.forEach(
      (value, name) => {
        this.render.setStyle(this.viewArcylicMotion.elementRef.nativeElement, name, value);
      }
    );
  }

  clearStyles() {
    this.rippleInStyles.forEach(
      (value, name) => {
        this.render.removeStyle(this.viewArcylicMotion.elementRef.nativeElement, name);
      }
    );
    this.rippleOutStyles.forEach(
      (value, name) => {
        this.render.removeStyle(this.viewArcylicMotion.elementRef.nativeElement, name);
      }
    );
  }

}
