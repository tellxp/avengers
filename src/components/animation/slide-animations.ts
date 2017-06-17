import {animate, animation, style, transition, trigger, useAnimation} from '@angular/animations';
export const slideDown = animation(
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
export const slideUp = animation(
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

export const slideLeft = animation(
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

export const slideRight = animation(
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
export const slideAnimations = trigger('scale', [
  transition('void => *',
    useAnimation(slideDown)
  ),
  transition('* => void',
    useAnimation(slideUp)
  )
]);
