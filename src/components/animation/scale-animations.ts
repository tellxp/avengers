import {animate, animation, style, transition, trigger, useAnimation} from '@angular/animations';
export const scaleIn = animation(
  [
    style({
      transform: '{{start}}',
    }),
    animate('{{duration}}',
      style({
        transform: '{{end}}'
      })
    )
  ],
  {
    params: {
      start: 'scale(0)',
      duration: '280ms',
      end: 'scale(1)'
    }
  }
);
export const scaleOut = animation(
  [
    style({
      transform: '{{start}}',
    }),
    animate('{{duration}}',
      style({
        transform: '{{end}}'
      })
    )
  ],
  {
    params: {
      start: '*',
      duration: '280ms',
      end: 'scale(0)'
    }
  }
);
export const scaleAnimations = trigger('scale', [
  transition('void => *',
    useAnimation(scaleIn)
  ),
  transition('* => void',
    useAnimation(scaleOut)
  )
]);
