import {animate, animation, style, transition, trigger, useAnimation} from '@angular/animations';

export const expandIn = animation(
  [
    style({
      height: '{{start}}',
      overflow: 'hidden'
    }),
    animate('{{duration}}',
      style({
        height: '{{end}}'
      })
    )
  ],
  {
    params: {
      start: '0',
      duration: '280ms',
      end: '*'
    }
  }
);
export const expandOut = animation(
  [
    style({
      height: '{{start}}',
      overflow: 'hidden'
    }),
    animate('{{duration}}',
      style({
        height: '{{end}}'
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
export const expandAnimations = trigger('expand', [
  transition('void => *',
    useAnimation(expandIn)
  ),
  transition('* => void',
    useAnimation(expandOut)
  )
]);
