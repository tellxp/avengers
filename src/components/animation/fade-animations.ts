import {animate, animation, style, transition, trigger, useAnimation} from '@angular/animations';
export const fadeIn = animation([
  style({opacity: '0'}),
  animate(1000, style({opacity: '1'}))
]);
export const fadeout = animation([
  style({opacity: '*'}),
  animate(1000, style({opacity: '0'}))
]);
export const fadeAnimations = trigger('fade', [
  transition('void => *',
    useAnimation(fadeIn)
  ),
  transition('* => void',
    useAnimation(fadeout)
  )
]);
