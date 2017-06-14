import {animate, animation, style, transition, trigger, useAnimation} from '@angular/animations';

export const rippleIn = animation([
    style({
      height: '{{start}}',
      overflow: 'hidden',
    }),
    animate('{{time}}',
      style({
        height: '{{end}}'
      }))
  ],
  {
    params: {
      time: '1000ms',
      start: '0',
      end: '600px'
    }
  }
);
export const rippleOut = animation([
    style({
      height: '{{start}}',
      overflow: 'hidden',

    }),
    animate('{{time}}',
      style({
        height: '{{end}}'
      }))
  ],
  {
    params: {
      time: '1000ms',
      start: '400px',
      end: '0'
    }
  }
);
export const rippleAnimations = trigger('ripple', [
  transition('void => *',
    useAnimation(rippleIn,)
  ),
  transition('* => void',
    useAnimation(rippleOut)
  )
]);
