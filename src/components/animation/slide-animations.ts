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
      start: 'translateY(-100%)',
      duration: '280ms',
      end: 'translateY(0%)'
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
      start: 'translateY(0%)',
      duration: '280ms',
      end: 'translateY(-100%)'
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
      start: 'translateX(-100%)',
      duration: '280ms',
      end: 'translateX(0%)'
    }
  }
);

export const slideRightIn = animation(
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
      start: 'translateX(-100%)',
      duration: '280ms',
      end: 'translateX(0%)'
    }
  }
);
export const slideRightOut = animation(
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
      start: 'translateX(0%)',
      duration: '280ms',
      end: 'translateX(100%)'
    }
  }
);
export const slideRightAnimations = trigger('slideRight', [
  transition('void => *',
    useAnimation(slideRightIn)
  ),
  transition('* => void',
    useAnimation(slideRightOut)
  )
]);
