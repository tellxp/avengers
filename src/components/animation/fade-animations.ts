import {animate, animation, style, transition, trigger, useAnimation} from '@angular/animations';
export const fadeIn = animation(
  [
    style({
      opacity: '{{start}}'
    }),
    animate('{{duration}}',
      style({
        opacity: '{{end}}'
      })
    )
  ],
  {
    params: {
      start: '0',
      duration: '280ms',
      end: '1'
    }
  }
);
export const fadeout = animation(
  [
    style({
      opacity: '{{start}}'
    }),
    animate('{{duration}}',
      style({
        opacity: '{{end}}'
      })
    )
  ],
  {
    params: {
      start: '*',
      duration: '280ms',
      end: '0'
    }
  }
);
export const fadeAnimations = trigger('fade', [
  transition('void => *',
    useAnimation(fadeIn)
  ),
  transition('* => void',
    useAnimation(fadeout)
  )
]);
