import {animate, animateChild, animation, state, style, transition, trigger, useAnimation} from '@angular/animations';
export const fadein = animation(
  animate(1000,
    style({
        opacity: 1
      }
    )
  )
);
export const fadeout = animation(
  animate(1000,
    style({
        opacity: 0
      }
    )
  )
);
export const fadeAnimation = trigger('fade',
  [
    state('in', style({
      opacity: '1',
    })),
    state('out', style({
      opacity: 0,
    })),
    transition('out => in',
      useAnimation(fadein)
    ),
    transition('in => out',
      useAnimation(fadeout)
    )
  ]
);

