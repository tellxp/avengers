import {animate, animation, style, transition, trigger, useAnimation} from '@angular/animations';

export const expandIn = animation([
  style({height: '0', overflow: 'hidden'}),
  animate(280, style({height: '*'}))
]);
export const expandOut = animation([
  style({height: '*', overflow: 'hidden'}),
  animate(280, style({height: '0'}))
]);
export const expandAnimations = trigger('expand', [
  transition('void => *',
    useAnimation(expandIn)
  ),
  transition('* => void',
    useAnimation(expandOut)
  )
]);
